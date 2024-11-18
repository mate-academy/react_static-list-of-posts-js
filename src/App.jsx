import './App.scss';

import postsFromServer from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  return users.find(user => user.id === userId);
}

function getComments(postId) {
  return comments.filter(comment => comment.postId === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
