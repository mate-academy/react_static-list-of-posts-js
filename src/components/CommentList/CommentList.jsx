import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ commentList }) => (
  <div className="CommentList">
    {commentList.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
