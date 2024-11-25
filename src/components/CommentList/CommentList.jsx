import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  const { id } = comments;

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={id} comment={comment} />
      ))}
    </div>
  );
};
