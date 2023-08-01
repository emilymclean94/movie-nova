import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { LIKE_POST } from "../../utils/mutations";
import "./posts.css";

const PostList = () => {
  const { loading, error, data } = useQuery(QUERY_POSTS);

  const [likePost] = useMutation(LIKE_POST, {
    onError: (error) => {
      console.error("Error liking post:", error.message);
    },
  });

  const handleLike = (postId) => {
    likePost({
      variables: { postId },
      update: (cache, { data: { likePost } }) => {
        // Update the cache to reflect the updated like count
        const updatedPost = likePost;
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        const updatedPosts = posts.map((post) =>
          post._id === updatedPost._id ? updatedPost : post
        );
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: updatedPosts },
        });
      },
    }).catch((error) => {
      console.error("Error liking post:", error.message);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Check if the data is available before rendering
  if (!data || !data.posts || !Array.isArray(data.posts)) {
    return <div>No posts found.</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {data.posts.map((post) => (
        <div key={post._id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <p className="card-text">Created at: {post.createdAt}</p>
            <p>Likes: {post.likes?.length ?? 0}</p>{" "}
            {/* Use optional chaining */}
            <button onClick={() => handleLike(post._id)}>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
