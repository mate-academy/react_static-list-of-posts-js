import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div>
    {comments?.map(comment => (
      <div className="CommentList">
        <div className="CommentInfo">
          <div className="CommentInfo__title">
            <strong className="CommentInfo__name">{comment.name}</strong>
            {' by '}
            <a
              className="CommentInfo__email"
              href="mailto:Telly_Lynch@karl.co.uk"
            >
              {comment.email}
            </a>
          </div>
          <div className="CommentInfo__body">{comment.body}</div>
        </div>
      </div>
    ))}
  </div>
);
