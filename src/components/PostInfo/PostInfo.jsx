import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post: { title, user, userId, body, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {user && <UserInfo user={user} key={userId} />}
    </div>

    <p className="PostInfo__body">{body}</p>

    <hr />

    {comments.length ? (
      <CommentList comments={comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
