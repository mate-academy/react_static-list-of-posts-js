import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  comments.map(comment => (
    <div className="CommentList">
      <CommentInfo comment={comment} key={comment.id} />
    </div>
  ))
);
