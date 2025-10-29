import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments = [] }) => {
  return (
    <div className="CommentList">
      {comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        comments && comments.map(c => <CommentInfo key={c.id} comment={c} />)
      )}
    </div>
  );
};
