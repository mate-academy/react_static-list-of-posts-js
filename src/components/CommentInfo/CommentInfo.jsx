export const CommentInfo = ({ infoComment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{infoComment.name}</strong>

      {' by '}

      <a className="CommentInfo__email" href={`mailto:${infoComment.email}`}>
        {infoComment.email}
      </a>
    </div>

    <div className="CommentInfo__body">{infoComment.body}</div>
  </div>
);
