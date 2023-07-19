import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments = [] }) => (
  <div className="CommentList">
    {comments.length === 0 ? (
      <div
        className="NoCommentsMessage"
        data-cy="NoCommentsMessage"
      >
        No comments found.
      </div>
    ) : (
      comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
    )}
  </div>
);
