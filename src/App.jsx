import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getCommentId(postId) {
  return commentsFromServer.filter(comment => postId === comment.postId);
}

function getUserId(userId) {
  return usersFromServer.find(user => userId === user.id)
    || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserId(post.userId),
  comments: getCommentId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
