import { UserInfo } from '../UserInfo/UserInfo';

import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <p className="CommentInfo__text">{comment.body}</p>
      <p className="CommentInfo__email">{comment.email}</p>
      <p className="CommentInfo__name">{comment.name}</p>
      {comment.user && <UserInfo user={comment.user} />}`
    </div>
  );
};
