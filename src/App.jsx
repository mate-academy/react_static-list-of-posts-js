import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  const findUser = usersFromServer
    .find(user => user.id === userId || null);

  return findUser || null;
}

function getCommentByPostId(postId) {
  const findComment = commentsFromServer
    .filter(comment => comment.postId === postId);

  return findComment || [];
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
