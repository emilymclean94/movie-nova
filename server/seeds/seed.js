const db = require('../config/connection');
const { Movie, User, Post } = require('../models');
const movieSeeds = require('./movieSeeds.json');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
  try {
    // Delete all existing users and posts from the respective collections
    await Movie.deleteMany({});
    await User.deleteMany({});
    await Post.deleteMany({});

    await Movie.create(movieSeeds);
    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: {
            postList: _id,
          },
        }
      );
    }

  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});
