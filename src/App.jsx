import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

// extract data from json files by id and data what we get
function getObjectById(id, data) {
  return data.find(prop => prop.id === id)
    || null;
}

function filterObjectById(id, data) {
  return data.filter(prop => prop.postId === id)
    || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getObjectById(post.userId, usersFromServer),
  comments: filterObjectById(post.id, commentsFromServer),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
