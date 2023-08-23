import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { user, title, body, comments } = post;
  const hasComments = comments.length > 0;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {hasComments
        ? (
          <CommentList comments={comments} />
        )
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </div>
  );
};
