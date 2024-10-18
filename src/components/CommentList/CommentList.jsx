import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map(comment => (
        <CommentInfo key={comment.imdbId} comment={comment} />
      ))}
    </div>
  );
};
