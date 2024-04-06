import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </>
);
