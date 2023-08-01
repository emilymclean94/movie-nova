const db = require('../config/connection');
const { User, Movie, Post } = require('../models');
const seeds = require('./seeds.json');

db.once('open', async () => {
  try {
    // Delete all existing users and posts from the respective collections
    await User.deleteMany({});
    await Movie.deleteMany({});
    await Post.deleteMany({});

    // Create new users and posts using the data from seeds.json
    const createdUsers = await User.create(seeds.users);
    const createdMovies = await Movie.create(seeds.movies);
    const createdPosts = await Post.create(seeds.posts);

    console.log(`${createdUsers.length} users seeded successfully`);
    console.log(`${createdMovies.length} users seeded successfully`);
    console.log(`${createdPosts.length} posts seeded successfully`);
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
});
