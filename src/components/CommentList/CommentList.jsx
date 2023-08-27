import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comment = [] }) => (
  comment.map(com => (
    <div className="CommentList">
      {com === [] ? null : <CommentInfo com={com} key={com.id} />}
    </div>
  ))
);
