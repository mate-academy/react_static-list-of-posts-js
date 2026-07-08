// export const CommentList = () => <>Put the list here</>;
import CommentInfo from '../CommentInfo';

const CommentList = ({ comments }) => {
  if (comments.length === 0) {
    return <div data-cy="NoCommentsMessage"> No comments yet </div>;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
