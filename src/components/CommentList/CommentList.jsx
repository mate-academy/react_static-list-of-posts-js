import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <div className="CommentList">
        <CommentInfo comment={comment} key={comment.id} />
      </div>
    ))}
  </div>
);
