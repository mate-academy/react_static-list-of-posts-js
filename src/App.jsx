import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';
import { getCommentsForPost, getUserForPost } from './utils';

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserForPost(post, usersFromServer),
  comments: getCommentsForPost(post, commentsFromServer),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
