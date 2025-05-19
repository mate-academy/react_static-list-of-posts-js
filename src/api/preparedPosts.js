import postsFromServer from './posts.json';
import commentsFromServer from './comments.json';
import usersFromServer from './users.json';

// Prepare posts with users and comments
export const preparedPosts = postsFromServer.map(post => {
  // Find the user that matches the post's userId
  const user = usersFromServer.find(u => u.id === post.userId);

  // Find all comments that match the post's id
  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return {
    ...post,
    user,
    comments,
  };
});
