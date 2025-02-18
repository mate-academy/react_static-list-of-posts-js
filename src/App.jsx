import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getPostById(userId) {
  return postsFromServer.find(user => user.userId === userId) || null;
}

function getCommentById(userId) {
  return commentsFromServer.find(user => user.postId === userId) || null;
}

export const todos = usersFromServer.map(todo => ({
  ...todo,
  post: getPostById(todo.id),
  comment: getCommentById(todo.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList todos={todos} />
  </section>
);
