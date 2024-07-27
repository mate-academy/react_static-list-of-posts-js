import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(com => {
      return <CommentInfo comment={com} key={com.id} />;
    })}
  </div>
);
