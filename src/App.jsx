import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserByUserId(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentByTestId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserByUserId(post.userId),
  comments: getCommentByTestId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
    <h1 className="App__title">Static list of posts</h1>
  </section>
);
