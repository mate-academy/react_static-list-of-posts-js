export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>

      <p>
        {' by '}
        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </p>
    </div>

    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
