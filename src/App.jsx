import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const getUserById = findId => usersFromServer
  .find(user => user.id === findId);

const getCommentsById = findId => commentsFromServer
  .filter(elemnt => elemnt.postId === findId);

const posts = postsFromServer.map(elemnt => ({
  ...elemnt,
  user: getUserById(elemnt.userId),
  comments: getCommentsById(elemnt.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
