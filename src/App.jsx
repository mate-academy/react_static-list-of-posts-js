import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(userId) {
  const foundedUser = usersFromServer.find(user => userId === user.id);

  return foundedUser || null;
}

function getCommentsById(postId) {
  const commentsList = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return commentsList;
}

const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);

export default App;
