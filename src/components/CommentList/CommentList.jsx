import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => {
      const { id } = comment;

      return (
        <CommentInfo
          key={id}
          comment={comment}
        />
      );
    })}
  </div>
);
