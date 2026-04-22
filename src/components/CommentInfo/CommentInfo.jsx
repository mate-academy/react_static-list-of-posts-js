import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <>
    <h4>{comment.name}</h4>
    <p>{comment.body}</p>
  </>
);
