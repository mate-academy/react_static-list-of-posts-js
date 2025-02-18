import { PostList } from './components/PostList/PostList';

import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const getUser = userId => {
  return usersFromServer.find(user => user.id === userId);
};

const getComments = postId => {
  return commentsFromServer.filter(comment => comment.postId === postId);
};

const getPostWithComment = post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
});

const posts = postsFromServer.map(post => getPostWithComment(post));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
