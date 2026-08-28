import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const getCorrectUser = id => {
  return usersFromServer.find(user => user.id === id);
};

const getCorrectComments = id => {
  return commentsFromServer.filter(comment => comment.postId === id);
};

const updatedData = postsFromServer.map(post => ({
  ...post,
  user: getCorrectUser(post.userId),
  comments: getCorrectComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList data={updatedData} />
  </section>
);
