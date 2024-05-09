import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }, { postId }) => {
  const findComment = comments.find(comment => comment.postId === postId);

  return (
    <div className="CommentList">
      {findComment.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
