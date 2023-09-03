import { PostInfo } from '../PostInfo';
import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

function filteredCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getUserByUserId(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserByUserId(post.userId),
  comments: filteredCommentsById(post.id),
}));

export const PostList = () => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
