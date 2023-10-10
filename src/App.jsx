import './App.scss';
import { PreparedPosts } from './components/PreparedPosts';
import { PostList } from './components/PostList';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={PreparedPosts} />
  </section>
);
