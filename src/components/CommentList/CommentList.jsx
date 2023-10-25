import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(eachComment => (
      <CommentInfo comment={eachComment} key={eachComment.id} />
    ))}
  </div>
);
