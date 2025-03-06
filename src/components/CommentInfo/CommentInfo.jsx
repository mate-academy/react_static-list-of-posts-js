export const CommentInfo = ({ com }) => {
  if (com) {
    // eslint-disable-next-line no-console
    console.log(com);
  }

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{com.name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${com.email}`}>
          {com.email}
        </a>
      </div>

      <div className="CommentInfo__body">{com.body}</div>
    </div>
  );
};
