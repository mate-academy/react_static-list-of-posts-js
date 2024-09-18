import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const getUser = userId => usersFromServer.find(user => user.id === userId);

const getComments = postId =>
  commentsFromServer.filter(comment => comment.postId === postId);

const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
