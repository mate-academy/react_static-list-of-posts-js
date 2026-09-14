import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) =>
  comments.map(comment => (
    <div className="CommentList" key={comment.id}>
      <CommentInfo comment={comment} />
    </div>
  ));
