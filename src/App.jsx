import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUsersServer(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentById(userId) {
  return commentsFromServer.find(user => user.postId === userId) || null;
}

export const posts = postsFromServer.map(todo => ({
  ...todo,
  user: getUsersServer(todo.userId),
  comment: getCommentById(todo.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
