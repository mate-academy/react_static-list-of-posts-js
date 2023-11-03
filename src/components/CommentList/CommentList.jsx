import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ postComments }) => (
  <div className="CommentList">
    {postComments.map(comment => (
      <CommentInfo commentInfo={comment} />
    ))}
  </div>
);
