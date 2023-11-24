export const CommentInfo = ({ comment }) => {
  const { id, email, body, name } = comment;

  return (
    <div className="CommentInfo" key={id}>

      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>
        {' by '}
        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </div>

      <p className="CommentInfo__body">{body}</p>
    </div>
  );
};
