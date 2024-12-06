import './App.scss';

import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  return users.find(user => user.id === userId) || null;
}

function getCommentsByPostId(postId) {
  return comments.filter(comment => comment.postId === postId);
}

export const App = () => {
  const postsWithUsersAndComments = posts.map(post => ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsByPostId(post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={postsWithUsersAndComments} />
    </section>
  );
};
