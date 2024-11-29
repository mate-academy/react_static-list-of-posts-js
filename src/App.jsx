import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const getUserById = id => {
  return usersFromServer.find(user => user.id === id);
};

const getCommentsById = id => {
  return commentsFromServer.filter(comment => comment.postId === id);
};

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsById(post.id),
  user: getUserById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
