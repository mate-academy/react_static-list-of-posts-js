import postsFromServer from '../api/posts.json';
import commentsFromServer from '../api/comments.json';
import usersFromServer from '../api/users.json';

export function normalizedPosts(
  posts = postsFromServer,
  comments = commentsFromServer,
  users = usersFromServer,
) {
  return posts.map(post => {
    const user = users.find(u => u.id === post.userId) || null;
    const postComments = comments.filter(c => c.postId === post.id);

    return {
      ...post,
      user,
      comments: postComments,
    };
  });
}
