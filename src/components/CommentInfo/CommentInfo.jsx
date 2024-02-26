export const CommentInfo = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${comment.name}`}>
          {comment.name}
        </a>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
