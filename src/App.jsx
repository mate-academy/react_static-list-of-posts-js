import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getCommentsByPostId(postId) {
  return commentsFromServer.filter(comment => postId === comment.postId);
}

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getPosts() {
  return postsFromServer.map(post => ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsByPostId(post.id),
  }));
}

export const posts = getPosts();

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
