import './App.scss';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const comentId = id => {
  return commentsFromServer.filter(coment => coment.postId === id);
};

const userId = id => {
  return usersFromServer.find(user => user.id === id);
};

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: comentId(post.id),
  user: userId(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
