import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export function PostInfo({ data }) {
  const { title, body, user, comment } = data;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo userInfo={user} />
        </p>
      </div>

      <p className="PostInfo__body"> {body} </p>

      <hr />
      {comment.length > 0 ? (
        <CommentList comment={comment} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
}
