import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

import './App.scss';

const getUser = post => usersFromServer.find(({ id }) => id === post.userId);
const getComments = postId => commentsFromServer
  .filter(comment => comment.postId === postId);

const preparePosts = () => postsFromServer.map((post) => {
  const user = getUser(post);
  const comments = getComments(post.id);

  return {
    ...post,
    user,
    comments,
  };
});

const posts = preparePosts();

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
