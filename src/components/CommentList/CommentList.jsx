import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ list }) => (
  <>
    {list.length > 0 ? (
      <div className="CommentList">
        {list.map(comment => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </>
);
