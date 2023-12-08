import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(el => <CommentInfo comment={el} key={el.id} />)}
  </div>
);
