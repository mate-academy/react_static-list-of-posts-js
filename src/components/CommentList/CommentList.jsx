import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  // console.log('CommentList received:', comments);

  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => {
        // console.log('Rendering comment:', comment);
        return <CommentInfo key={comment.id} comment={comment} />;
      })}
    </div>
  );
};
