export const CommentInfo = ({ comment }) => {
  const { id, name, email, body } = comment;

  return (
    <div key={id} className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{`${name}`}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${email}`}>
          {`${email}`}
        </a>
      </div>

      <div className="CommentInfo__body">{`${body}`}</div>
    </div>
  );
};
