import { PostList } from './components/PostList';
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const getUserById = userId =>
  usersFromServer.find(user => user.id === userId || null);

const getCommentsById = id =>
  commentsFromServer.filter(comment => id === comment.postId);

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
