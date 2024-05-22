import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post: { title, user, body, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <UserInfo user={user} />
    </div>

    <p className="PostInfo__body">{body}</p>

    {comments.length === 0 ? (
      <div className="CommentList">
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>
    ) : (
      <CommentList comments={comments} />
    )}
  </div>
);
