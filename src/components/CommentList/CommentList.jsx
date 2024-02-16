export const CommentList = ({ comments }) => (
  <div className="CommentList">
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {comments.name}
        </strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${comments.email}`}
        >
          {comments.email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {comments.body}
      </div>
    </div>
  </div>
);
