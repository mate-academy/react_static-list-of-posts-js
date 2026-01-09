import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const commentsToShow = post.comments || [];
  const existUser = post.user ? post.user : null;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

      {existUser ? (
        <UserInfo user={post.user} />
      ) : (
        <span>User not found!</span>
      )}


      </div>

      <p className="PostInfo__body">{post.body}</p>

      {commentsToShow.length ? (
        <CommentList comments={post.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
