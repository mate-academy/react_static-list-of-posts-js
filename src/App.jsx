import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(postFromServer => ({
  ...postFromServer,
  comments: commentsFromServer.filter(
    comment => comment.postId === postFromServer.id,
  ),
  user: usersFromServer.find(user => user.id === postFromServer.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
