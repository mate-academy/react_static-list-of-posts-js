import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';

function getUserById(userId) {
  return users.find(user => user.id === userId) || null;
}

function getCommentsById(postId) {
  return comments.filter(comment => comment.postId === postId) || null;
}

export const fullPosts = posts.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList fullPosts={fullPosts} />
  </section>
);
