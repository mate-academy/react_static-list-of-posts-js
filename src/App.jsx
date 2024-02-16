import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function getCommentsById(id) {
  return commentsFromServer.filter(comments => comments.postId === id);
}

export const objects = postsFromServer.map(obj => ({
  ...obj,
  user: getUserById(obj.userId),
  comments: getCommentsById(obj.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList objects={objects} />
  </section>
);
