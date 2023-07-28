import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { Postlist } from './components/PostList';
// import { UserInfo } from './components/UserInfo';

function getUser(id) {
  return usersFromServer.find(user => user.id === id) || null;
}

function getComments(id) {
  return commentsFromServer.filter(comment => comment.postId === id) || null;
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <Postlist posts={posts} />
  </section>
);
