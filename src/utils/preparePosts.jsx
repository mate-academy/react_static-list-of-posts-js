import postsFromServer from '../api/posts.json';
import commentsFromServer from '../api/comments.json';
import usersFromServer from '../api/users.json';

export const preparePosts = () => {
  return postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));
};
