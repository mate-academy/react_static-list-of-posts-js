import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </>
  );
};
