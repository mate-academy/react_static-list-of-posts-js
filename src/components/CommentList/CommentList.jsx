import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comment }) => {
  return (
    <div className="CommentList">
      {comment.map(com => (
        <CommentInfo key={com.id} com={com} />
      ))}
    </div>
  );
};
