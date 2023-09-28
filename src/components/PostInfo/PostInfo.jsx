import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <li className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          <span> Posted by  </span>

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length === 0
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : (
          <CommentList comments={comments} />
        )}
    </li>
  );
};
