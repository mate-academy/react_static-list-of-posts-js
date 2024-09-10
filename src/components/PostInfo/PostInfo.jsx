import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post: { title, user, body, comments } }) => (
  <div className="PostInfo">
    <header className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      <p>
        {' Posted by  '}
        <UserInfo user={user} />
      </p>
    </header>
    <p className="PostInfo__body">{body}</p>
    <CommentList comments={comments} />
  </div>
);
