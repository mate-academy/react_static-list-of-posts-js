import './App.scss';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';

export const App = () => (
  <PostList
    postList={postsFromServer}
  />
);
