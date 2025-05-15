import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const preparedPosts = postsFromServer.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId) || null;
  const comments =
    commentsFromServer.filter(comment => comment.postId === post.id) || null;

  return {
    comments,
    user,
    ...post,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
