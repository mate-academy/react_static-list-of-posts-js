import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const posts = postsFromServer.map((post) => {
  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id && comment.postId !== null,
  );

  const users = usersFromServer.find(user => user.id === post.userId);

  return { ...post, comments, users };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
