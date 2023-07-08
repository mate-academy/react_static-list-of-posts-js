import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ arrOfComments }) => (
  <div className="CommentList">
    {arrOfComments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
