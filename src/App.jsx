import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

// function getPostsById(postsId) {
//   return postsFromServer.find(posts => posts.id === postsId) || null;
// }

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

// const comments = commentsFromServer.map(comment => ({
//   ...comment,
//   post: getPostsById(comment.postId),
//   comments: getCommentsById(post.id),
// }));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
    <b data-cy="NoCommentsMessage">No comments yet</b>
  </section>
);
