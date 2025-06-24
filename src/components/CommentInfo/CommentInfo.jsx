export const CommentInfo = ({ name, email, body }) => (
  <div className="CommentInfo">
    <p className="CommentInfo__name">{name}</p>
    <p className="CommentInfo__email">{email}</p>
    <p className="CommentInfo__body">{body}</p>
  </div>
);
