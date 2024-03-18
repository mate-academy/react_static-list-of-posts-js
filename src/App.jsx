/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const posts = postsFromServer.map(
  post =>
    (post = {
      ...post,
      user: {
        name: usersFromServer.find(u => u.id === post.userId).name,
        email: usersFromServer.find(u => u.id === post.userId).email,
      },
    }),
);

posts.map(
  post =>
    (post.comments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    )),
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
