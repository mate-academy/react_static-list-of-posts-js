import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(item => (
        <CommentInfo comment={item} key={item.id} />
      ))}
    </div>
  );
};
