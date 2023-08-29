import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const findUserById = userId => (
  usersFromServer.find(({ id }) => id === userId)
    || null
);

const filterPostComments = id => (
  commentsFromServer.filter(({ postId }) => postId === id)
);

const posts = () => (
  postsFromServer.map(post => ({
    ...post,
    user: findUserById(post.userId),
    comments: filterPostComments(post.id),
  }))
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts()} />
  </section>
);
