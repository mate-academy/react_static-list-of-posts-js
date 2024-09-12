import './CommentInfo.scss';
export const CommentInfo = ({comment}) => {
  const {name, email, body} = comment;

  return (
    <div class = 'CommentInfo'>
      <div class = 'CommentInfo__title'>
      <strong className="CommentInfo__name">{name}</strong>
        <span> by </span>
        <a className="CommentInfo__email" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <div className="CommentInfo__body">{body}</div>
    </div>
  )
};

