import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsByPostId(postId) {
  return commentsFromServer.filter(com => com.postId === postId);
}

export const info = postsFromServer.map(el => ({
  ...el,
  user: getUserById(el.userId),
  comments: getCommentsByPostId(el.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={info} />
  </section>
);
