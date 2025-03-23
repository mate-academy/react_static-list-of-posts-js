import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      // There is correctly added key prop
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
