import './App.scss';
import { preparedPosts } from './api/preparedPosts';
import { PostList } from './components/PostList/PostList';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
