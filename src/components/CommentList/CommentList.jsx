import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

export const CommentList = ({ comments }) => {
  if (!comments.length) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
