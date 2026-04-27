import './App.scss';

import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';
import { PostList } from './components/PostList/PostList';

const resultPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => post.id === comment.postId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList resultPosts={resultPosts} />
  </section>
);
