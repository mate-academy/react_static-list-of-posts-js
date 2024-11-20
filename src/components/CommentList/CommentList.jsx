import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  const commentsList = comments.map(comment => (
    <CommentInfo key={comment.id} comment={comment} />
  ));
  const toRender =
    commentsList.length !== 0 ? (
      <div className="CommentList">{commentsList}</div>
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    );

  return toRender;
};
