import postsFromServer from '../api/posts.json';
import commentsFromServer from '../api/comments.json';
import usersFromServer from '../api/users.json';

export const PreparedPosts = postsFromServer.map((post) => {
  const user = usersFromServer.find(person => post.userId === person.id);
  const comments = commentsFromServer.filter(comment => post.id
  === comment.postId);

  return {
    ...post,
    user,
    comments,
  };
});
