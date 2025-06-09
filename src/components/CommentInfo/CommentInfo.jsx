export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {comment.user ? comment.user.name : comment.name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${comment.user ? comment.user.email : comment.email}`}
      >
        {comment.user ? comment.user.email : comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comment.body}
      {/* dolorum voluptas laboriosam quisquam ab totam beatae et aut
      aliquid optio assumenda voluptas velit itaque quidem voluptatem
      tempore cupiditate in itaque sit molestiae minus dolores magni */}
    </div>
  </div>
);
