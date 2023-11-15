import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export function CommentList({ commets }) {
  return (
    <div className="CommentList">
      {commets.map(comment => (
        <CommentInfo commet={comment} key={comment.id} />
      ))}
    </div>
  );
}
