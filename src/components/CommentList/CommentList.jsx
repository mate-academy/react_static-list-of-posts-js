import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ IdOfPost, Comments }) => {
  const comms = Comments.filter(com => com.postId === IdOfPost);

  if (comms.length > 0) {
    return (
      <div className="CommentList">
        {comms.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }

  return <b data-cy="NoCommentsMessage">No comments yet</b>;
};
