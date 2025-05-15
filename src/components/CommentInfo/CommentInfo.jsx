export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    {comment && comment.name ? (
      <>
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{comment.name}</strong>

          {' by '}

          <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
            {comment.email}
          </a>
        </div>

        <div className="CommentInfo__body">{comment.body}</div>
      </>
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
