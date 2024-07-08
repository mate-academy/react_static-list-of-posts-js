import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

const NO_COMMENTS = 'No comments yet';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">{body}</p>

      {!comments.length ? (
        <div>
          <hr />

          <b data-cy="NoCommentsMessage">{NO_COMMENTS}</b>
        </div>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
