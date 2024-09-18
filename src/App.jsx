import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const getUserOfPost = post =>
  usersFromServer.find(user => post.userId === user.id) || null;

const getCommentsOfPost = post =>
  commentsFromServer.filter(comment => post.id === comment.id) || null;

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserOfPost(post),
  comments: getCommentsOfPost(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
