import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ commenstList }) => {
  if (commenstList.length > 0) {
    return (
      <div className="CommentList">
        {commenstList.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }

  return <b data-cy="NoCommentsMessage">No comments yet</b>;
};
