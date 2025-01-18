import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ postComments }) => (
  <div className="CommentList">
    {postComments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </div>
);
