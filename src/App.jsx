import './App.scss';
import { PostList } from './components/PostList';
import { getPosts } from './api';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={getPosts()} />
  </section>
);
