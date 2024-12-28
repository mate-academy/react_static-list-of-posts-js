import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const getUserInfo = userId => {
  return usersFromServer.find(user => user.id === userId);
};

export const getComments = postId => {
  return commentsFromServer.filter(comment => comment.postId === postId);
};

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserInfo(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
