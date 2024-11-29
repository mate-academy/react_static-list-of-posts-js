import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <p>
          {' Posted by  '}
          {user && <UserInfo user={user} />}
        </p>
        <p className="PostInfo__body">{body}</p>
      </div>
      <CommentList comments={comments} />
    </div>
  );
};
