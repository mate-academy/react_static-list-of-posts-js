import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';

export const CommentInfo = ({ comment }) => {
  const user = usersFromServer.find(user => user.id === comment.userId);

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {comment.name}
        </strong>
        {' by '}
        <UserInfo user={user} showEmailOnly={true} />
      </div>

      <div className="CommentInfo__body">
        {comment.body}
      </div>
    </div>
  )
  };
