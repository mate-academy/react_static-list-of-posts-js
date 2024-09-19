import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

export function CommentList({ comments }) {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
