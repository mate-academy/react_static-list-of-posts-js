import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import { PostList } from './components/PostList/PostList';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentByPostId(postId) {
  return commentsFromServer.filter(comm => comm.postId === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <PostList posts={posts} />
  </section>
);
