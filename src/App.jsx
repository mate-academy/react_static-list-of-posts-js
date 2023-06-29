import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const posts = postsFromServer.map((post) => {
  const user = usersFromServer.find(
    internetUser => internetUser.id === post.userId || null,
  );
  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id || null,
  );

  return {
    ...post,
    comments,
    user,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
