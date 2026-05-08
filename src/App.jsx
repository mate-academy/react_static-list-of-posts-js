import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getPostComments(postId) {
  return (
    commentsFromServer.filter(comment => comment.postId === postId) || null
  );
}

function getUserValues(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export const postContent = postsFromServer.map(post => ({
  ...post,
  user: getUserValues(post.userId),
  comments: getPostComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postContent} />
  </section>
);
