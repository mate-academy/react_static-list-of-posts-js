import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <>
    <div className="CommentList">
      {comments?.map(comment => (
        <CommentInfo key={comment.key} comment={comment} />
      ))}
    </div>
  </>
);
