import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUsers(userId) {
  return usersFromServer.find(({ id }) => id === userId) || null;
}

function getComments(postId) {
  return commentsFromServer.filter(({ postId: id }) => id === postId);
}

export const posts = postsFromServer.map(({ userId, id, ...rest }) => ({
  ...rest,
  user: getUsers(userId),
  comments: getComments(id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
