export const CommentInfo = ({ comment }) => {
  console.log(comment);
  const userEmail = `mailto:${comment.email}`;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {comment.name}

        <a className="CommentInfo__email" href={userEmail}>
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
