import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const usersById = usersFromServer.reduce((acc, user) => {
  // eslint-disable-next-line no-param-reassign
  acc[user.id] = user;

  return acc;
}, {});

const commentsByPostId = commentsFromServer.reduce((acc, comment) => {
  const { postId } = comment;

  if (!acc[postId]) {
    // eslint-disable-next-line no-param-reassign
    acc[postId] = [];
  }

  acc[postId].push(comment);

  return acc;
}, {});

const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: usersById[post.userId],
  comments: commentsByPostId[post.id] || [],
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList preparedPosts={preparedPosts} />
  </section>
);
