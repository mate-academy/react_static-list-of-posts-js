import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

const posts = postsFromServer.map(post => {
  const postComments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return {
    ...post,
    user: getUserById(post.userId),
    comments: postComments,
  };
});

export const users = usersFromServer;

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);

export default App;
