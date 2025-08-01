import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ title, body, user, comments }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{title}</h2>
    <p className="PostInfo__body">{body}</p>

    {user && <UserInfo name={user.name} email={user.email} />}

    <CommentList comments={comments || []} />
  </div>
);
