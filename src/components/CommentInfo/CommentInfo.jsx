export const CommentInfo = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <li className="CommentInfo">
      <p className="CommentInfo__name">{name}</p>
      <p className="CommentInfo__body">{body}</p>
      <a href={`mailto:${email}`} className="CommentInfo__email">
        {email}
      </a>
    </li>
  );
};
