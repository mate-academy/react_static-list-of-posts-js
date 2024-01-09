import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import './App.scss';

const getCommentById = postId => (
  commentsFromServer.filter(comment => comment.postId === postId)
);

const getUserById = userId => (
  usersFromServer.find(user => user.id === userId)
);

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId) || null,
  comments: getCommentById(post.id) || null,
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
