import comments from '../../api/comments.json';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ currentPost }) => {
  const commentsForCurrentPost = comments.filter(
    comment => comment.postId === currentPost.id,
  );

  if (!commentsForCurrentPost.length) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {commentsForCurrentPost.map(comment => (
        <CommentInfo currentComment={comment} />
      ))}
    </div>
  );
};
