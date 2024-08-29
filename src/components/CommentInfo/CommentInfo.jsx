export const CommentInfo = ({ currentComment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{currentComment.name}</strong>

      {' by '}

      <a className="CommentInfo__email" href={`mailto:${currentComment.email}`}>
        {currentComment.email}
      </a>
    </div>

    <div className="CommentInfo__body"> {currentComment.body} </div>
  </div>
);
