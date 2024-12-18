import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return comments.map(comment => (
    <div className="CommentList">
      <CommentInfo comment={comment} />
    </div>
  ));
};

export default CommentList;
