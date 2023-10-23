import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getPostComments(commensId) {
  return commentsFromServer.filter(commens => commens.postId === commensId);
}

function getPostUser(userId) {
  return usersFromServer.find(user => user.id === userId)
    || null;
}

export const posts = postsFromServer.map(pos => ({
  ...pos,
  user: getPostUser(pos.userId),
  comments: getPostComments(pos.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postL={posts} />
  </section>
);
