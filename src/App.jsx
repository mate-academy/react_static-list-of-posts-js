import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  usersFromServer.find(user => user.id === userId || null);
}

function getCommentById(postId) {
  commentsFromServer.find(comment => comment.postId === postId || null);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
}));

export const comments = postsFromServer.map(post => ({
  comment: getCommentById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} comments={comments} />
  </section>
);
