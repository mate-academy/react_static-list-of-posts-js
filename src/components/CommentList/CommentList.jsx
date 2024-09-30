import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ commentsForPost }) => (
  <div className="CommentList">
    {Array.isArray(commentsForPost) && commentsForPost.length > 0 ? (
      commentsForPost.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    ) : (
      <p>No comments available</p>
    )}
  </div>
);
