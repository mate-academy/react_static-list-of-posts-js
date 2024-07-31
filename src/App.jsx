import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getComments(postId) {
  const comments =
    commentsFromServer.filter(comment => comment.postId === postId) || null;

  return comments;
}

function getUser(userId) {
  const actualUser = usersFromServer.find(user => user.id === userId) || null;

  return actualUser;
}

const posts = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
