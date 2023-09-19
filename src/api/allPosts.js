import postsFromServer from './posts.json';
import commentsFromServer from './comments.json';
import usersFromServer from './users.json';

function GetAllComments(postId) {
  return commentsFromServer.filter(item => item.postId === postId);
}

function GetPostUser(userId) {
  return usersFromServer.find(item => item.id === userId);
}

export const allPosts = postsFromServer.map(item => (
  {
    ...item,
    comments: GetAllComments(item.id),
    user: GetPostUser(item.userId),
  }
));
