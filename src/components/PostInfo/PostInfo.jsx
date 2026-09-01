import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post: { title, body, user, comments } }) => (
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
    {!comments || comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={comments} />
    )}
  </div>
);
