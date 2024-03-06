import './App.scss';

import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';
import postsFromServer from './api/posts.json';

import { PostList } from './components/PostList/PostList';

function getUserByUserId(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function getCommentsByPostId(postId) {
  return commentsFromServer.filter(comments => comments.postId === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserByUserId(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
