export const CommentInfo = ({ comment }) => (
  <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
    {comment.email}
  </a>
);
