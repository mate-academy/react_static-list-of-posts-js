import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function findUserId(UserId) {
  return usersFromServer.find(user => user.id === UserId);
}

function filterCommentsByUserId(comments, UserId) {
  return comments.filter(comment => comment.postId === UserId);
}

const posts = postsFromServer.map(post => {
  const user = findUserId(post.userId);
  const comments = filterCommentsByUserId(commentsFromServer, post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
