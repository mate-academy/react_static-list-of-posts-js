import './App.scss';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsFromServer} />
  </section>
);
