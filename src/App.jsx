import './App.scss';

import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUser(userId) {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId) {
  const foundComments = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return foundComments || [];
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={ posts } />
  </section>
);
