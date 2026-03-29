import { CommentInfo } from "../CommentInfo/CommentInfo";
import '../CommentList/CommentList.scss';

export const CommentList = ({ comments }) => (

  <div className="CommentList">
    {comments.length === 0 && <p data-cy="NoCommentsMessage">No comments</p>}
    {comments.map(comment =>
      <CommentInfo key={comment.id} comment={comment} />
    )}
  </div>
)
