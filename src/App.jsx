import './App.scss';

import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';
import postsFromServer from './api/posts.json';
import { PostList } from './components/PostList/PostList';

const findUserById = userId =>
  usersFromServer.find(user => user.id === userId) || null;

const getCommentsById = postId =>
  commentsFromServer.filter(comment => comment.postId === postId);

const posts = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
