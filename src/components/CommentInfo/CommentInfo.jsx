export const CommentInfo = ({ comment }) => {
  const mail = `mailto:${comment.email}`;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={mail}
        >
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {comment.body}
      </div>
    </div>
  );
};
