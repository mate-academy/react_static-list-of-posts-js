import postsData from './posts.json';
import commentsData from './comments.json';
import usersData from './users.json';

export const preparePosts = () => {
  return postsData.map(post => {
    const foundUser = usersData.find(user => user.id === post.userId); // Changed 'user' to 'foundUser'
    const comments = commentsData.filter(comment => comment.postId === post.id);

    return { ...post, user: foundUser, comments };
  });
};
