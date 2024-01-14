import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getCommentsByIdFromPosts(idFromPosts) {
  return commentsFromServer.filter(comm => comm.postId === idFromPosts)
    || null;
}

function getUsersByIdFromPosts(userId) {
  return usersFromServer.filter(user => user.id === userId)
    || null;
}

export const combinedPostsUsersCommArr = postsFromServer.map(post => ({
  ...post,
  user: getUsersByIdFromPosts(post.userId),
  comments: getCommentsByIdFromPosts(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList />
  </section>
);
