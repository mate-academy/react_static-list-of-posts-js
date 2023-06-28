import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const postsFullInfo = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsList(post.id),
  user: getUserById(post.userId),
}));

function getCommentsList(postId) {
  return commentsFromServer.filter(item => item.postId === postId);
}

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsFullInfo} />
  </section>
);
