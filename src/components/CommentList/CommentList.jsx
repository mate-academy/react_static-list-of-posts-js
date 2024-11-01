import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0 ? (
      <p data-cy="NoCommentsMessage">There are no comments</p>
    ) : (
      comments.map(comment => {
        return <CommentInfo key={comment.id} comment={comment} />;
      })
    )}
  </div>
);
