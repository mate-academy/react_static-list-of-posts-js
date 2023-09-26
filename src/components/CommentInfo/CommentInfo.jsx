export const CommentInfo = ({ comment }) => (
  <>
    <p>
      {comment.name}
      by
      <a href={`mailto:${comment.email}`}>{comment.email}</a>
    </p>
    <br />
    <p>{comment.body}</p>
  </>
);
