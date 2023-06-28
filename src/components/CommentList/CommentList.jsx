import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />))}
  </ul>
);
