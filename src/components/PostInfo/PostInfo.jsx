import React from 'react';
import './PostInfo.scss';

const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="user-info">
        <strong>User ID:</strong> {post.userId}
      </div>
      <div className="comments">
        <h3>Comments:</h3>
        <ul>
          {post.comments.map((comment, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostInfo;
