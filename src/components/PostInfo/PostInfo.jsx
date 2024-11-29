import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post: { title, user, comments, body } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      <p>
        {' Posted by '}
        {user && <UserInfo user={user} />}
      </p>
    </div>
    <p className="PostInfo__body">{body}</p>
    <hr />
    {comments && comments.length > 0 ? (
      <CommentList comments={comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
