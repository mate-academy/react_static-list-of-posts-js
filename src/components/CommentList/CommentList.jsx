import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments = [] }) => (
  <div className="CommentList">
    {comments.length !== 0 ? (
      comments.map(el => <CommentInfo comment={el} key={el.id} />)
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
