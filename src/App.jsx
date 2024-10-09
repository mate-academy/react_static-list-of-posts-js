import './App.scss';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList />
    </section>
  );
};
