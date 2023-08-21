import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <ul className="CommentList" style={{ listStyle: 'none' }}>
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </ul>
);
