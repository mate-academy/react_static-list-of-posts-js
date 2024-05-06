import './App.scss';
import { posts } from './api/posts';
import { PostList } from './components/PostList/PostList';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
