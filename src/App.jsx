import './App.scss';

import postsFromServer from './api/posts.json';
import { PostList } from './components/PostList';
import { getUserById, getComments } from './utils/utils';

const posts = postsFromServer.map(post => ({
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
