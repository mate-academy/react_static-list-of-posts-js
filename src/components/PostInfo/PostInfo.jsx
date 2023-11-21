import './PostInfo.scss';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { user, comments, title, body } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {comments.length
        ? (<CommentList comments={comments} />)
        : (<b data-cy="NoCommentsMessage">No comments yet</b>)
      }

    </div>
  );
};
