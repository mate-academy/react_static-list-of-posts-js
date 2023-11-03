export const CommentInfo = ({ commentInfo }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{commentInfo.name}</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${commentInfo.email}`}
      >
        {commentInfo.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {commentInfo.body}
    </div>
  </div>
);
