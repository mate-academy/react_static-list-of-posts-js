import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">

    {comments.map(comment => (
      <div key={comment.id}>
        <CommentInfo
          comment={comment}
          key={comment.id}
        />
      </div>
    ))}

  </div>
);
