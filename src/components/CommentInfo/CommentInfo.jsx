export const CommentInfo = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <p className="CommentInfo__name">{comment.name}</p>
      <a href={`mailto:${comment.email}`} className="CommentInfo__email">
        {comment.email}
      </a>
      <p className="CommentInfo__body">{comment.body}</p>
    </div>
  );
};
