export const CommentInfo = ({ c }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{c.name}</strong>

      {' by '}

      <a className="CommentInfo__email" href={`mailto:${c.email}`}>
        {c.email}
      </a>
    </div>

    <div className="CommentInfo__body">{c.body}</div>
  </div>
);
