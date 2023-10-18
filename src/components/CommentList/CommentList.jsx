import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  comments.map(comment => (
    <div className="CommentList" key={comment.id}>
      <CommentInfo comment={comment} />
    </div>
  ))
);
