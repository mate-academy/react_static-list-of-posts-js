import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getComments(postId) {
  return (
    commentsFromServer.reduce((acc, current) => {
      if (current.postId === postId) {
        acc.push(current);
      }

      return acc;
    }, []) || null
  );
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <PostList posts={ posts } />
  </section>
);
