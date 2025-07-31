import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comms }) => (
  <div className="CommentList">
    {comms.map(c => (
      <CommentInfo c={c} key={c.id} />
    ))}
  </div>
);
