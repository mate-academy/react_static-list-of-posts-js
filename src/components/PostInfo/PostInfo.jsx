import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const {
    title,
    body,
    comments,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <UserInfo user={user} />

        <p className="PostInfo__body">
          {body}
        </p>

        {comments.length > 0 ? (
          <CommentList comments={comments} />
        ) : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
      </div>
    </div>
  );
};
