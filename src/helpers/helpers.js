import commentsFromServer from '../api/comments.json';
import usersFromServer from '../api/users.json';
import postsFromServer from '../api/posts.json';

function getUser(userId) {
  return usersFromServer.find(user => userId === user.id)
      || null;
}

function getComments(id) {
  return commentsFromServer.filter(coment => coment.postId === id)
      || null;
}

export const allPosts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));
