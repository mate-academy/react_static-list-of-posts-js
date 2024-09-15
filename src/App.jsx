import './App.scss';
import { PostList } from './components/PostList/PostList';
import { posts } from './components/Utils';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
