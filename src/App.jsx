import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const postsGlobal = postsFromServer.map(post => (
  {
    ...post,
    user: usersFromServer.find(author => author.id === post.userId),
    comments: commentsFromServer.filter(({ postId }) => postId === post.id),
  }
));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsGlobal} />
  </section>
);
