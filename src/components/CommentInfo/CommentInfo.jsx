import './CommentInfo.scss';

function getNamebyEmail(email) {
  const indexAt = email.indexOf('@');

  const name = email.slice(0, indexAt);

  return name;
}

export const CommentInfo = ({ comment }) => (
  <>
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {getNamebyEmail(comment.email)}

        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  </>
);
