import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length !== 0 ? (
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    ) : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </div>
);
