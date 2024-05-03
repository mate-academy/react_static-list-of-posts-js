import postsFromServer from './posts.json';
import commentsFromServer from './comments.json';
import usersFromServer from './users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export function getPosts() {
  return postsFromServer.map(post => ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentByPostId(post.id),
  }));
}
