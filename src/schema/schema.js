import postsFromServer from '../api/posts.json';
import commentsFromServer from '../api/comments.json';
import usersFromServer from '../api/users.json';

const getUserByUserId = userId => {
  return usersFromServer.find(user => {
    return user.id === userId;
  });
};

const getCommentsByPostId = postId => {
  return commentsFromServer.filter(comment => {
    return comment.postId === postId;
  });
};

export const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserByUserId(post.userId),
    comments: getCommentsByPostId(post.id),
  };
});
