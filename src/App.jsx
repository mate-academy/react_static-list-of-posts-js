import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getCommentsByPostId(id) {
  return commentsFromServer.filter(post => post.postId === id) || null;
}

function getUserByUserId(id) {
  return usersFromServer.find(user => user.id === id) || null;
}

const postWithUsers = postsFromServer.map(post => ({
  ...post,
  user: getUserByUserId(post.userId),
}));

const postsWithComments = postWithUsers.map(post => ({
  ...post,
  comments: getCommentsByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsWithComments} />
  </section>
);
