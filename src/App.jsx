import './App.scss';

import commentsFromServer from './api/comments.json';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const user = userId => usersFromServer.find(u => u.id === userId);

const commentsFromPost = postId =>
  commentsFromServer.filter(c => c.postId === postId);

const posts = postsFromServer.map(post => ({
  ...post,
  user: user(post.userId),
  comments: commentsFromPost(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
