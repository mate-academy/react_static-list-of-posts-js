import './App.scss';

import postsFromServer from './api/posts.json';

import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

// eslint-disable-next-line import/no-cycle
import { PostList } from './components/PostList/PostList';

function getUserById(post) {
  return usersFromServer.find(a => a.id === post.userId) || null;
}

function getCommentsById(post) {
  return commentsFromServer.filter(b => b.postId === post.id);
}

export const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post),
  comments: getCommentsById(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
