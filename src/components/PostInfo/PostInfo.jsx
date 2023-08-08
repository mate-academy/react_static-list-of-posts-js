import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post: { user, comments, title, body } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      <UserInfo user={user} />
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    {comments.length > 0
      ? <CommentList comments={comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>
    }
  </div>
);
