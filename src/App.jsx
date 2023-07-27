import { PostList } from './components/PostList';
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(({ id }) => id === post.userId) || null,
  comments: commentsFromServer.filter(({ postId }) => post.id === postId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
