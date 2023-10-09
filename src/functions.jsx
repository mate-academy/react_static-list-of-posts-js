import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const posts = postsFromServer
  .map(post => ({
    ...post,
    comments: getCommentsById(post.id),
    user: getUserById(post.userId),
  }));

function getCommentsById(id) {
  if (!commentsFromServer) {
    return [];
  }

  return commentsFromServer.filter(comment => comment.postId === id);
}

function getUserById(id) {
  return usersFromServer.find(user => user.id === id);
}
