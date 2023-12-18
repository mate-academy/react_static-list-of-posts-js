import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

const CommentList = ({ comments }) => {
  const i = '';

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment + i} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentList;
