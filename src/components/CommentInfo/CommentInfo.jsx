export const CommentInfo = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <CommentTitle name={comment.name} email={comment.email} />
      <CommentBody body={comment.body} />
    </div>
  );
};

const CommentTitle = ({ name, email }) => (
  <div className="CommentInfo__title">
    <strong className="CommentInfo__name">{name}</strong>
    {' by '}
    <a className="CommentInfo__email" href={`mailto:${email}`}>
      {email}
    </a>
  </div>
);

const CommentBody = ({ body }) => (
  <div className="CommentInfo__body">{body}</div>
);
