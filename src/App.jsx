import './App.scss';

import commentsFromServer from './api/comments.json';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList/PostList';

const getUserById = userId => usersFromServer.find(user => user.id === userId);

const getCommentsById = postId => {
  return commentsFromServer.filter(comment => comment.postId === postId);
};

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
