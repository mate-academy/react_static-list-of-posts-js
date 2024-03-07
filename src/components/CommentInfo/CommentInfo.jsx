export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo">
      <p className="CommentInfo__name">{name}</p>
      <a href={`mailto:${email}`} className="CommentInfo__email">
        {email}
      </a>
      <p className="CommentInfo__body">{body}</p>
    </div>
  );
};
