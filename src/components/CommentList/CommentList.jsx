import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => {
      return <CommentInfo comment={comment} key={comment.postId} />;
    })}
  </div>
);
