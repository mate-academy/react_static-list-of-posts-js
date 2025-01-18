export const CommentInfo = ({ comment }) => {
  const { user } = comment.relatedPost.user;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>
        by {user.name}
        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
