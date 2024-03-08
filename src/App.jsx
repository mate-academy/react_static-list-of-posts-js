import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

import './App.scss';

const getUserById = userId => usersFromServer.find(user => user.id === userId);

const getCommentsByPostId = id => {
  return commentsFromServer.filter(comment => comment.postId === id);
};

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
