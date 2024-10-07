import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getCommentById(postId) {
  return (
    commentsFromServer.filter(comment => comment.postId === postId) || null
  );
}

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const currentData = postsFromServer.map(post => ({
  ...post,
  comment: getCommentById(post.id),
  user: getUserById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    {currentData.map(data => (
      <PostList data={data} key={data.id} />
    ))}
  </section>
);
