export const CommentInfo = ({ comment }) => {
  return (
    <div className="comment">
      <p className="comment__body">{comment.body}</p>
    </div>
  );
};
