import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;
  const mailLink = `mailto:${email}`;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={mailLink}
        >
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </div>
  );
};
