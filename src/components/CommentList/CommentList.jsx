import comments from '../../api/comments.json';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export function CommentList({ postId }) {
  const postHasComments = comments.some(comment => comment.postId === postId);
  const targetComments = comments.filter(comment => comment.postId === postId);

  return (
    <>
      {postHasComments ? (
        <div className="CommentList">
          {targetComments.map(comment => (
            <CommentInfo commentId={comment.id} key={comment.id} />
          ))}
        </div>
      ) : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </>
  );
}
