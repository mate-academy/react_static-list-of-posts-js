import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post: { title, body, user, comments } }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{title}</h2>
    <p>{body}</p>
    <UserInfo user={user} />

    <CommentList comments={comments} />
  </div>
);
