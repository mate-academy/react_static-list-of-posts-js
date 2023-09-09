import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId)
      || [];
}

export const todos = postsFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
  comment: getCommentsById(todo.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      todos={todos}
    />
  </section>
);
