import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const preparedPosts = postsFromServer.map((post) => {
  const user = usersFromServer.find(u => post.userId === u.id);
  const comments = commentsFromServer.filter(comment => post.id
  === comment.postId);

  return {
    ...post,
    user,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
