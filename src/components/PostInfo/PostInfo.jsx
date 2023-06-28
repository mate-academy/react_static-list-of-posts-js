import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;
  const withoutCommentCase = (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );

  const commentsBlock = comments.length > 0
    ? <CommentList comments={comments} />
    : withoutCommentCase;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {commentsBlock}
    </div>
  );
};
