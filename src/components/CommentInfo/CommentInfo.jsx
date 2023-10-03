export const CommentInfo = ({ comment: { name, email, body } }) => (
  <div className="CommentInfo">
    <div className="CommentInfo_title">
      {name && (
        <strong className="CommentInfo__name">
          {name}
        </strong>
      )}

      {' by '}
      {email && (
        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      )}
    </div>

    {body && (
      <div className="CommentInfo__body">
        {body}
      </div>
    )}
  </div>
);
