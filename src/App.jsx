import './App.scss';
import { PostList } from './components/PostList';
import { getPreparedPosts } from './api';

export const App = () => {
  const posts = getPreparedPosts();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
