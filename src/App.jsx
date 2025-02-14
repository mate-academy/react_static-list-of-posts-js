import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserData(userId) {
  return usersFromServer.find(u => u.id === userId);
}

function getComments(postId) {
  return commentsFromServer.filter(c => c.postId === postId);
}

export const getPostData = () =>
  postsFromServer.map(p => ({
    ...p,
    user: getUserData(p.userId),
    comments: getComments(p.id),
  }));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={getPostData()} />
  </section>
);
