import { UserInfo } from '../UserInfo/UserInfo';

export const CommentInfo = ({ comment }) => (
  <div>
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {' by '}

        <UserInfo email={comment.email} />
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  </div>
);
