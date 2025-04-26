import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList/PostList';

const getCommentById = post => {
  return commentsFromServer.filter(comment => comment.postId === post.id);
};

const getUserById = post => {
  return usersFromServer.find(user => user.id === post.userId);
};

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: getCommentById(post),
  user: getUserById(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
