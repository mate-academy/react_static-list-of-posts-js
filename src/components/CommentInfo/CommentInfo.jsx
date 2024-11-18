import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const { email, name, body } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        <a className="CommentInfo__email" href={`mailto:${email}`}>
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">{body}</div>
    </div>
  );
};
