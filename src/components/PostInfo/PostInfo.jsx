import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const {
    title,
    user,
    comments,
    body,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
        <p>
          <span className="PostInfo__title-by">Posted by</span>

          <UserInfo user={user} />
        </p>
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </div>
  );
};
