import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(item => (
        <CommentInfo comment={item} key={item.id} />
      ))}
    </div>
  );
};
