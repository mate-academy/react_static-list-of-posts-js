export const CommentInfo = ({ comment }) => {
  const { name: commentName, email: commentEmail, body: commentBody } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{commentName}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${commentEmail}`}
        >
          {commentEmail}
        </a>
      </div>

      <div className="CommentInfo__body">
        {commentBody}
      </div>
    </div>
  );
};
