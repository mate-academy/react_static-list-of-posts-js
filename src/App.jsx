import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

function findUserFromId(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function findCommentFromId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const posts = postsFromServer.map(post => (
  {
    ...post,
    users: findUserFromId(post.userId),
    comments: findCommentFromId(post.id),
  }
));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
