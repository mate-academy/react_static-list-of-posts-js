import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(users, userId) {
  return users.find(user => user.id === userId) || null;
}

function getCommentsByPostId(comments, postId) {
  return comments.filter(comment => comment.postId === postId);
}

const preparedPosts = postsFromServer.map(post => {
  const user = getUserById(usersFromServer, post.userId);
  const comments = getCommentsByPostId(commentsFromServer, post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
