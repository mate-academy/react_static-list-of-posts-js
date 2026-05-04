import React from 'react';
import usersFromServer from './api/users.json';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId) || null,
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => {
  return (
    <div className="App">
      <h1>Static list of posts</h1>

      <PostList posts={posts} />
    </div>
  );
};
