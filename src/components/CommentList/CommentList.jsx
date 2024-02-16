export const CommentList = ({ data }) => (
  <div className="CommentList">
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {data.name}
        </strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${data.email}`}
        >
          {data.email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {data.body}
      </div>
    </div>
  </div>
);
