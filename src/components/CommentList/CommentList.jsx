import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comms }) => {
  if (!Array.isArray(comms) || comms.length === 0) {
    return <p>No comments available</p>;
  }

  return (
    <div className="CommentList">
      {comms.map(comm => (
        <CommentInfo key={comm.id} comm={comm} />
      ))}
    </div>
  );
};
