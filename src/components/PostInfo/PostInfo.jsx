import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ todo }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{todo.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={todo.user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {todo.body}
      </p>

      <hr />

      <b data-cy="NoCommentsMessage">
        {todo.comment.map(com => (
          com.length === 0 ? (
            <p>Not comments yet</p>
          ) : (
            <CommentList com={com} />
          )
        ))}
      </b>
    </div>
  </>
);
