export const CommentInfo = ({ comment }) => {
  if (!comment || !comment.name || !comment.email || !comment.body) {
    return null;
  }

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__item">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{comment.name}</strong>
          {' by '}
          <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
            {comment.email}
          </a>
        </div>
        <div className="CommentInfo__body">{comment.body}</div>
      </div>
    </div>
  );
};
