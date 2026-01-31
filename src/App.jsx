import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function findUserByPost(users, userId) {
  return users.find(user => userId === user.id) || null;
}

function findCommentByPost(comments, postId) {
  return comments.filter(comment => comment.postId === postId);
}

const posts = postsFromServer.map(post => {
  const user = findUserByPost(usersFromServer, post.userId);
  const comments = findCommentByPost(commentsFromServer, post.id);

  return {
    user,
    post,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
