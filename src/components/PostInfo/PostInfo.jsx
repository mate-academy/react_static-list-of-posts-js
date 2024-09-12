import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post: { title, body, user, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        <span> Posted by </span>

        {user && <UserInfo user={user} />}
      </p>
    </div>

    <p className="PostInfo__body">{body}</p>

    <hr />
    {comments.length > 0 ? (
      <CommentList comments={comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
