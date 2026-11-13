import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <p className="PostInfo__id">id: {post.id}</p>
    <p className="PostInfo__userID">User ID: {post.userId}</p>
    <UserInfo user={post.user} />
    <p className="PostInfo__title">{post.title}</p>
    <p className="PostInfo__body">{post.body}</p>
    {post.comments && post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <p data-cy="NoCommentsMessage">No comments yet</p>
    )}
  </div>
);
