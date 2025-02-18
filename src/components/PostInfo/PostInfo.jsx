import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ todos }) =>
  todos.map(user => (
    <div key={todos.id} className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{user.title}</h3>
        <p>
          {' Posted by  '}

          <UserInfo name={user.name} email={user.email} />
        </p>
      </div>

      <p className="PostInfo__body">{user.post.body}</p>
      <hr />

      {user.comment === null ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comment={user.comment} />
      )}
    </div>
  ));
