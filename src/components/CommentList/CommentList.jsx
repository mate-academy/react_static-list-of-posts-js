import "./CommentList.scss";

export const CommentList = ({ comments }) => (
  <div>
    {!!comments.length ? (
      comments.map((comment) => (
        <div className="CommentList">
          <div className="CommentInfo">
            <div className="CommentInfo__title">
              <strong className="CommentInfo__name">{comment.name}</strong>
              {" by "}
              <a className="CommentInfo__email" href={comment.email}>
                {comment.email}
              </a>
            </div>
            <div className="CommentInfo__body">{comment.body}</div>
          </div>
        </div>
      ))
    ) : (
      <strong data-cy="NoCommentsMessage" >No comments yet</strong>
    )}
  </div>
);
