import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LikePostBtn from "../pages/Posts/LikePostBtn";
import UpdatePostBtn from "../pages/Posts/UpdatePostBtn";
import DeletePostBtn from "../pages/Posts/DeletePostBtn";

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <Col className="postlist-content">
      <h2 className="postlist-title">Posts</h2>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                {showUsername ? (
                  <Link
                    className="text-light"
                    to={`/profiles/${post.postAuthor}`}
                  >
                    {post.postAuthor} <br />
                    <span style={{ fontSize: "1rem" }}>
                      had this post on {post.createdAt}
                    </span>
                  </Link>
                ) : (
                  <>
                    <span style={{ fontSize: "1rem" }}>
                      You had this post on {post.createdAt}
                    </span>
                  </>
                )}
              </h5>
              <p className="card-text">
                Post: {}
                {post.postText}
              </p>
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/posts/${post._id}`}
              >
                Join the discussion on this post.
              </Link>
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
