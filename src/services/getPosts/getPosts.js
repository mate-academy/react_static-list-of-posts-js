import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

const getUser = userId => {
  return usersFromServer.find(user => user.id === userId);
};

const getComments = id => {
  return commentsFromServer.filter(comment => comment.postId === id);
};

export const getPosts = () => {
  return postsFromServer.map(post => {
    const user = getUser(post.userId);
    const comments = getComments(post.id);

    if (!user) {
      throw new Error(`User with ID ${post.userId} not found.`);
    } else {
      return {
        ...post,
        user,
        comments,
      };
    }
  });
};
