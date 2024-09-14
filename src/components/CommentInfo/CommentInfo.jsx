import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__body">{comment.body}</div>
    <strong className="CommentInfo__name">{comment.name}</strong>
    <p>
      <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
        {comment.email}
      </a>
    </p>
  </div>
);
