/* eslint-disable arrow-parens */
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getCommentsForPost(postId) {
  return commentsFromServer.filter((comment) => comment.postId === postId);
}

function getUserById(userId) {
  return usersFromServer.find((user) => user.id === userId);
}

const posts = postsFromServer.map((post) => {
  const user = getUserById(post.userId);
  const comments = getCommentsForPost(post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
