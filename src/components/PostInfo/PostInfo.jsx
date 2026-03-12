import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ title, body, user, comments }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo name={user?.name} email={user?.email} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>
      <CommentList comments={comments} />
    </div>
  );
};
