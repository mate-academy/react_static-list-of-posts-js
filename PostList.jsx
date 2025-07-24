import React from 'react';

export const PostList = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id} className="PostList__item">
        <h3 className="PostList__title">{post.title}</h3>
        <p className="PostList__body">{post.body}</p>
      </li>
    ))}
  </ul>
);
