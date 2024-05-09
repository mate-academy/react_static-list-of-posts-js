import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getPostById(postId) {
  return postsFromServer.find(user => user.id === postId) || null;
}

export const postsWithUsers = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
}));

export const comentsWithPosts = commentsFromServer.map(comment => ({
  ...comment,
  post: getPostById(comment.postId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsWithUsers} />
  </section>
);
