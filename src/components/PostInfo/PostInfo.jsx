import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ todo }) => {
  const { title, user, body, comments } = todo;

  return (
    <li className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <span>
          {' Posted by  '}

          <UserInfo user={user} />
        </span>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      <b data-cy="NoCommentsMessage">

        {todo.comments.length > 0 ? (
          <CommentList comments={comments} />
        ) : (
          <p>No commnets yet</p>
        )}
      </b>
    </li>
  );
};
