import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const getUserById = userId => {
  return usersFromServer.find(user => user.id === userId) || null;
};

const getCommentsById = postId => {
  return commentsFromServer.filter(comment => {
    return comment.postId === postId;
  });
};

const postsWithUserAndComments = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsById(post.id),
  user: getUserById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsWithUserAndComments} />
  </section>
);
