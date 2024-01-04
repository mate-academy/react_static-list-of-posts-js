import './App.scss';

import postsFromServer from './api/posts.json';
import { PostList } from './components/PostList';
import { getCommentsByPostId, getUserById } from './utils';

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
