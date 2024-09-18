import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';

export const PostInfo = ({ post }) => {
  const { userId, title, body, comments } = post;
  const user = usersFromServer.find(item => item.id === userId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <CommentList comments={comments} />
    </div>
  );
};
