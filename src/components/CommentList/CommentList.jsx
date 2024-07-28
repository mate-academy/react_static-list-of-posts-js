import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(commentItem => {
      return <CommentInfo comment={commentItem} key={commentItem.id} />;
    })}
  </div>
);
