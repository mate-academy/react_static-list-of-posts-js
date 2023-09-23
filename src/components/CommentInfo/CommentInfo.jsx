export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo_title">
      {comment.name && (
        <strong className="CommentInfo__name">
          {comment.name}
        </strong>
      )}

      {' by '}
      {comment.email && (
        <a
          className="CommentInfo__email"
          href={`mailto:${comment.email}`}
        >
          {comment.email}
        </a>
      )}

    </div>

    {comment.body && (
      <div className="CommentInfo__body">
        {comment.body}
      </div>
    )}
  </div>
);
