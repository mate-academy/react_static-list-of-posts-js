export const CommentInfo = ({ comment }) => {
  const mailTo = `mailto:${comment.email}`;

  return (
    <div className="CommentList">
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{comment.name}</strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href={mailTo}
          >
            {comment.email}
          </a>
        </div>

        <div className="CommentInfo__body">
          {comment.body}
        </div>
      </div>
    </div>
  );
};
