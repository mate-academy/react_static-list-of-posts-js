import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

import './App.scss';
import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function filteredComments(postId) {
  return commentsFromServer.filter(
    commentSearched => commentSearched.postId === postId,
  );
}

const updatedPosts = postsFromServer.map(
  post => ({
    ...post,
    comments: filteredComments(post.id),
    user: getUserById(post.userId),
  }),
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={updatedPosts} />

  </section>
);
