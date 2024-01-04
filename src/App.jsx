import './App.scss';
import { findPosts } from "./api";
import { PostList } from './components/PostList';

export const posts = findPosts();

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts}/>
  </section>
);
