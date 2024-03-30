import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ posts }) => {
  const { comments } = posts;

  return (
    <>
      {comments.length > 0 ? (
        <div>
          {comments.map(comment => (
            <CommentInfo
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </>
  );
};
