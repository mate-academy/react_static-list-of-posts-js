import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  if (!comments) {
    return null;
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {'Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <p data-cy="NoCommentsMessage">No comments available</p>
      )}
    </div>
  );
};
