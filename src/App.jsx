import './App.scss';
import { PostList } from './components/PostList';
import { getUserById, getCommentById } from './utils/utils';

import postsFromServer from './api/posts.json';

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={posts}
    />
  </section>
);
