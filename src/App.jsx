import './App.scss';
import { PostList } from './components/PostList/PostList';
import { preparePosts } from './utils/prepareData';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const posts = preparePosts(postsFromServer, usersFromServer, commentsFromServer);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
