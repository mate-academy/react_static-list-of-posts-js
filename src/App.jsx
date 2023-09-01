import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserByPostId(id) {
  const arr = [];

  commentsFromServer.filter((elem) => {
    if (elem.postId === id) {
      arr.push(elem);
    }

    return elem;
  });

  return arr;
}

function getUserByUserId(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserByUserId(post.userId),
}));

export const postsUpdate = posts.map((elem) => {
  const valueElem = elem;

  valueElem.comments = getUserByPostId(elem.id);

  return elem;
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsUpdate} />
  </section>
);
