import './App.scss';

import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';

import { PostList } from './components/PostList';

function findUser(userId) {
  return users.find(user => user.id === userId);
}

function findComments(id) {
  return comments.filter(coment => coment.postId === id);
}

export const decomposeUsers = () => {
  return posts.map(post => ({
    user: findUser(post.userId),
    ...post,
    comments: findComments(post.id),
  }));
};

// { console.log(decomposeUsers().slice(0, 1)) };

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postComponents={decomposeUsers()} />
  </section>
);
