export const CommentList = ({ comments }) => {
  const {
    name,
    email,
    body,
  } = comments;

  return (
    <div className="CommentList">
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{ name }</strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href={email}
          >
            { email }
          </a>
        </div>

        <div className="CommentInfo__body">
          { body }
        </div>
      </div>
    </div>
  );
};
