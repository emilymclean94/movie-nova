import React from "react";
import { Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import LikePostBtn from "./LikePostBtn";
import UpdatePostBtn from "./UpdatePostBtn";
import DeletePostBtn from "./DeletePostBtn";
import "./posts.css";

const PostList = () => {
  const { loading, error, data } = useQuery(QUERY_POSTS);

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
    <Col className="postlist-content">
      <h2 className="postlist-title">Posts</h2>
      {data.posts.map((post) => (
        <div key={post._id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title" id="post1">
              Title: {}
              {post.title}
            </h5>
            <p className="card-text" id="post2">
              Post: {}
              {post.postText}
            </p>
            <p className="card-text" id="post3">
              Created at: {}
              {post.createdAt}
            </p>
            <div className=" edit-button p-1">
              <LikePostBtn postID={post.postId} />
            </div>
            <div className="edit-button p-1">
              <UpdatePostBtn title={post.title} postText={post.postText} />
            </div>
            <div className="edit-button p-1">
              <DeletePostBtn postId={post.postId} />
            </div>
          </div>
        </div>
      ))}
    </Col>
  );
};

export default PostList;
