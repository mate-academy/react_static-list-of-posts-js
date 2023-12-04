import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function GetCommentById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function GetUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: GetUserById(post.userId),
  comments: GetCommentById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
