import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

const NoCommentInfo = () => (
  <>
    <hr />
    <b data-cy="NoCommentsMessage">No comments yet</b>
  </>
);

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0 ? (
      <NoCommentInfo />
    ) : (
      comments.map(commentItem => (
        <CommentInfo key={commentItem.id} comment={commentItem} />
      ))
    )}
  </div>
);
