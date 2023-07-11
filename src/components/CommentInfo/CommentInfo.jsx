import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  return (
    <>
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{name}</strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href="mailto:Telly_Lynch@karl.co.uk"
          >
            {email}
          </a>
        </div>

        <div className="CommentInfo__body">
          {body}
        </div>
      </div>

      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">
            {name}
          </strong>

          {' by '}
          <a
            className="CommentInfo__email"
            href="mailto:Nikita@garfield.biz"
          >
            {email}
          </a>
        </div>

        <div className="CommentInfo__body">
          {body}
        </div>
      </div>
    </>
  );
};
