import postsFromServer from './posts.json';
import commentsFromServer from './comments.json';
import usersFromServer from './users.json';

function GetAllComments(postId) {
  const comments = commentsFromServer.filter(item => item.postId === postId);

  return comments;
}

function GetPostUser(userId) {
  const user = usersFromServer.find(item => item.id === userId);

  return user;
}

export const allPosts = postsFromServer.map(item => (
  {
    ...item,
    comments: GetAllComments(item.id),
    user: GetPostUser(item.userId),
  }
));
