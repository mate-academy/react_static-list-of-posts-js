import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments, postId }) => {
  const postComments = comments.filter(comment => comment.postId === postId);

  return (
    <div className="CommentList">
      {postComments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        postComments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      )}
    </div>
  );
};
