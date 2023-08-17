import './CommentInfo.scss';

export const CommentInfo = ({
  comment: {
    name,
    email,
    body,
  },
}) => (
  <li className="CommentInfo">
    <h2 className="CommentInfo__title">
      <strong className="CommentInfo__name">{name}</strong>

      {' by '}

      <a className="CommentInfo__email" href={`mailto:${email}`}>
        {email}
      </a>
    </h2>

    <div className="CommentInfo__body">
      {body}
    </div>
  </li>
);
