export const CommentInfo = ({ comment }) => {
  if (comment) {
    const { name, email, body } = comment;
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
  }

  return <></>;
};
