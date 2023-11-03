import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserByPost(userId) {
  return usersFromServer.find(user => userId === user.id)
    || null;
}

function getCommentsByPost(id) {
  return commentsFromServer.filter(comment => id === comment.postId);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserByPost(post.userId),
  comments: getCommentsByPost(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
