import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const getUser = byId => {
  return usersFromServer.find(user => byId === user.id);
};

const getComments = byPostId => {
  return commentsFromServer.filter(com => byPostId === com.postId);
};

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
