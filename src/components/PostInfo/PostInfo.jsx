import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post: { comments, user, title, body } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>{' Posted by  '}</p>
      <UserInfo user={user} />
    </div>

    <p className="PostInfo__body">{body}</p>
    <CommentList comments={comments} />
  </div>
);
