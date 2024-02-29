import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments &&
      comments.map(comment => {
        return <CommentInfo comment={comment} />;
      })}
  </div>
);
