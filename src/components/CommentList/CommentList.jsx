import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  const sortedComments = comments.sort((a, b) => a.id - b.id);

  return (
  <div className='CommentList'>
    {comments.length > 0 ? (
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    ) : (
      <b data-cy='NoCommentsMessage'>No comments yet</b>
    )}
  </div>
  );
};
