export const CommentInfo = ({ comment: { name, email, body } }) => {
  const emailHref = `mailto:${email}`;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={emailHref}>
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">{body}</div>
    </div>
  );
};
