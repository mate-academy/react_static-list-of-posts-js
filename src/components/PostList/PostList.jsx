import { PostInfo } from '../PostInfo';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

function getCommentByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const PostList = ({ posts }) => (
  <div className="PostList">
  </div>
);
