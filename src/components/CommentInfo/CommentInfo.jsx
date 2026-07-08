// export const CommentInfo = () => <>Put the comment here</>;
import './CommentInfo.scss';

const CommentInfo = ({ comment }) => (
  <div className="CommentInfo" data-cy="CommentInfo">
    <div className="CommentInfo__name" data-cy="CommentName">
      {comment.name}
    </div>

    <a
      className="CommentInfo__email"
      href={`mailto:${comment.email}`}
      data-cy="CommentEmail"
    >
      {comment.email}
    </a>

    <div className="CommentInfo__body" data-cy="CommentBody">
      {comment.body}
    </div>
  </div>
);

export default CommentInfo;
