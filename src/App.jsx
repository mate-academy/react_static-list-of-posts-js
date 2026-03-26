import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const preparedPosts = postsFromServer.map(post => {
  const foundUser = usersFromServer.find(
    u => String(u.id) === String(post.userId),
  );

  const postComments = commentsFromServer.filter(c => c.postId === post.id);

  return { ...post, user: foundUser, comments: postComments };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
