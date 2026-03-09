import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.user.name}</strong>
      {' by '}
      <a className="CommentInfo__email" href={`mailto:${comment.user.email}`}>
        {comment.user.email}
      </a>
    </div>

    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
