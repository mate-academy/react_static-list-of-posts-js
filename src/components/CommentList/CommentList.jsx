import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comment = [] }) => (
  <div className="CommentList">
    {comment.map(commentary => (
      commentary === []
        ? null
        : <CommentInfo commentary={commentary} key={commentary.id} />
    ))}
  </div>
);
