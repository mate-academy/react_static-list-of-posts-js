import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ postId, comments }) => {
  const filteredComments = comments.filter(
    comment => comment.postId === postId,
  );

  return (
    <div className="CommentList">
      {filteredComments.length === 0 ? (
        <>
          <hr />
          <p>No comments yet</p>
        </>
      ) : (
        filteredComments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      )}
    </div>
  );
};
