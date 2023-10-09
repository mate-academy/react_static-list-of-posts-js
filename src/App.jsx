import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const preparedPosts = postsFromServer.map(posts => ({
  ...posts,
  user: getUserById(posts.userId),
  comments: getCommentsById(posts.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
