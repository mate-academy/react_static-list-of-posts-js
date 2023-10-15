import './App.scss';
import { getUsersById, getComments } from './functions';
import postsFromServer from './api/posts.json';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUsersById(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (

  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>

);
