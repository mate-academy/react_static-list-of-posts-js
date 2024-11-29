import usersFromSever from '../api/users.json';
import commentsFromServer from '../api/comments.json';

function getUser(userId) {
  return usersFromSever.find(user => user.id === userId);
}

function getComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export function combinedInput(posts) {
  return posts.map(post => ({
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }));
}
