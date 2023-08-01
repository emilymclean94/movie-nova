const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: Schema.Types.ObjectId, // Ensure that likes is an array of ObjectId
      ref: 'User',
    },
  ],
  },
  {
  toJSON: {
    virtuals: true,
    },
  }
);

postSchema.virtual('likeCount').get(function () {     return `${this.friends.length}`;
  })

const Post = model('Post', postSchema);

module.exports = Post;
