import './CommentList.scss'

export const CommentList = ({ postId, comments }) => (
  <div className="CommentList">
  {comments
  .map(comment => (
    <div key={comment.id}>
      <CommentInfo comment={comment} />
    </div>
  ))}
  </div>
);
