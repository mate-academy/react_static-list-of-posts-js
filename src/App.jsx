import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
    || null;
}

const posts = postsFromServer.map((post) => {
  const user = getUserById(post.userId);

  const commentPost = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return {
    ...post,
    user,
    comments: commentPost,
  };
});

export const App = () => (
  <PostList
    posts={posts}
  />
);
