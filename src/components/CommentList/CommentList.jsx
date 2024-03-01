import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => {
      return <CommentInfo key={`comment-${comment.id}`} comment={comment} />;
    })}
  </div>
);
