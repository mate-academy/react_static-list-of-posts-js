import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(com => (
        <CommentInfo key={com.id} comment={com} />
      ))}
    </div>
  );
};
