import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;
  const { length } = comments;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <p>
          {' Posted by '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />
      {length ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
