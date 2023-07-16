import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

export const PostInfo = (
  {
    post: {
      title, user, comment, body,
    },
  },
) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {user && <UserInfo user={user} />}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comment ? (
      <CommentList comment={comment} />
    )
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
  </div>
);
