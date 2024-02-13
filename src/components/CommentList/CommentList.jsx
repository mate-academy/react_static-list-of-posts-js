import commentsFromServer from '../../api/comments.json';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ post }) => {
  const comments = commentsFromServer
    .filter(comment => comment.postId === post.id);

  if (comments.length === 0) {
    return (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
