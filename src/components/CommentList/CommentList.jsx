import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

export const CommentList = ({ comments }) => {
  const { id } = comments;

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={id} comment={comment} />
      ))}
    </div>
  );
};
