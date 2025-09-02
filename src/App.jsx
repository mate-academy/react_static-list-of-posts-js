import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const getUserById = id => usersFromServer.find(user => user.id === id) || [];

const getCommentsByPostId = postId =>
  commentsFromServer.filter(comment => comment.postId === postId);

const postList = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsByPostId(post.id),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postList={postList} />
  </section>
);
