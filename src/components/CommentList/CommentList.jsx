import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ post }) =>
  post.comments.length === 0 ? (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  ) : (
    <div className="CommentList">
      {post.comments.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </div>
  );
