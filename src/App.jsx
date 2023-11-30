import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

// object of default user in case if the userId is not found
const defaultUser = {
  id: 0,
  name: 'Anonymous',
  username: 'DefaultUser',
  email: '',
};

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
    || defaultUser;
}

function getCommentsByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsByPostId(post.id),
  user: getUserById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
