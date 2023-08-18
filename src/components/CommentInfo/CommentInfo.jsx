import './CommentInfo.scss';

export const CommentInfo = ({ comment: { name, email, body } }) => (
  <div className="CommentInfo">
    <a className="CommentInfo__email" href={`mailto:${email}`}>
      {email}
    </a>

    {' commented: '}

    <strong className="CommentInfo__name">{name}</strong>

    <p className="CommentInfo__body">{body}</p>
  </div>
);
