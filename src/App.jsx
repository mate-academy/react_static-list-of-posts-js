import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const preparedPosts = postsFromServer.map(post => {
  const users = usersFromServer.find(user => user.id === post.userId);
  const comments = commentsFromServer.filter(comm => comm.postId === post.id);

  return {
    ...post,
    users,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
