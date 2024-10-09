import { UserInfo } from '../UserInfo/UserInfo';
import './CommentInfo.scss';

export const CommentInfo = ({ comment, user }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>
        {comment.email && (
          <>
            {' by '}
            <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
              {comment.email}
            </a>
          </>
        )}
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
