import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post: {
  id,
  userId,
  title,
  body,
  comments,
  user,
} }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {user && (
        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      )}
    </div>

    <p className="PostInfo__body">{body}</p>

    <hr />

    {comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={comments} />
    )}
  </div>
);
