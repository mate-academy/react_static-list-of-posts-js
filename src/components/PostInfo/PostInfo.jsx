import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { id, title, user, body, comments } = post;

  return (
    <div
      className="PostInfo"
      key={id}
    >
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          <span> Posted by </span>

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>
      }
    </div>
  );
};
