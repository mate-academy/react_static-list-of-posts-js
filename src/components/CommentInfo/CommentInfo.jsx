export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <li className="CommentInfo">
      <li className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </li>

      <li className="CommentInfo__body">
        {body}
      </li>
    </li>
  );
};
