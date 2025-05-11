import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const createAllPosts = postsFromServer.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId);
  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return {
    ...post,
    user: user || null,
    comments: comments || [],
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={createAllPosts} />
  </section>
);
