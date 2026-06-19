import './App.scss';

import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';
import { PostList } from './components/PostList';

function userById(userId) {
  return users.find(user => user.id === userId) || null;
}

function commentsById(postId) {
  return comments.filter(comment => comment.postId === postId);
}

export const postFromServer = posts.map(post => ({
  ...post,
  user: userById(post.userId),
  comments: commentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postFromServer} />
  </section>
);
