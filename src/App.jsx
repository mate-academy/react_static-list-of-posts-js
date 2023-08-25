import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function findUserById(id) {
  return usersFromServer.find(user => (
    id === user.id
  )) || null;
}

function getCommentsByPostId(postId) {
  return commentsFromServer.filter(comment => (
    comment.postId === postId
  ));
}

export const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
