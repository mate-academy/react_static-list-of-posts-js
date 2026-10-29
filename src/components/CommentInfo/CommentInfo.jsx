export const CommentInfo = ({ comment: { name, email, body } }) => {
  return (
    <div className="CommentInfo">
      <p className="CommentInfo__name">{name}</p>

      <a className="CommentInfo__email" href={`mailto:${email}`}>
        {email}
      </a>

      <p className="CommentInfo__body">{body}</p>
    </div>
  );
};
