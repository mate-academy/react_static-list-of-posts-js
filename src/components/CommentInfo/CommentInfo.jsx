export const CommentInfo = ({ currComment }) => (
  <div className="CommentInfo">
    <div className="Comment__title">
      <strong className="CommentInfo__name">{currComment.name}</strong>
      {' by '}
      <a className="CommentInfo__email" href={`mailto:${currComment.email}`}>
        {currComment.email}
      </a>
    </div>
    <div className="CommentInfo__body">
      {currComment.body}
    </div>
  </div>
);
