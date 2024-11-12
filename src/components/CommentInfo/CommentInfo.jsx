// eslint-disable-next-line import/no-cycle
import { getMailTo } from '../../App';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>

      {' by '}

      <a className="CommentInfo__email" href={getMailTo(comment.email)}>
        {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
