import './App.scss';

import postsFromServer from './api/posts.json';
import { getUserById, getCommentsByPostId } from './utils';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsByPostId(post.id),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
