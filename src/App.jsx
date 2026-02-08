import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const findCommentsById = post => {
  return commentsFromServer.filter(comment => post.id === comment.postId);
};

const findUserById = post => {
  return usersFromServer.find(user => post.userId === user.id);
};

const posts = postsFromServer.map(post => ({
  ...post,
  comments: findCommentsById(post),
  user: findUserById(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
