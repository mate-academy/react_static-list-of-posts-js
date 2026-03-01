import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const commentEmail = comment.email;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${commentEmail}`}>
          {commentEmail}
        </a>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
