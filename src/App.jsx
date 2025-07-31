import './App.scss';

import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} users={users} comments={comments} />
  </section>
);
