import '../CommentInfo/CommentInfo.scss';

function CommentInfo({ comment }) {
  return (
    <div className="comment">
      <p className="comment__body">{comment.body}</p>
    </div>
  );
}

export default CommentInfo;