export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__header">
      <h3 className="CommentInfo__title">{comment.id || ''}</h3>
      <a className="CommentInfo__email" href={`mailto:${comment.email || ''}`}>
        {comment.email || ''}
      </a>
      <p className="CommentInfo__name">{comment.name || ''}</p>
    </div>
    <p className="CommentInfo__body">{comment.body || ''}</p>
  </div>
);
