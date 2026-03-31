import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <h4 className="CommentInfo__name">{comment.name}</h4>
    <p className="CommentInfo__email">{comment.email}</p>
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);
