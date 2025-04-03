import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) =>
  comments.map(comment => (
    <div className="CommentList">
      <CommentInfo key={comment.id} comment={comment}/>
    </div>
  ));
