import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <article className="CommentInfo">
    <h4>{comment?.name}</h4>
    <p>{comment?.body}</p>
  </article>
);
