import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo" style={{ border: '1px solid #fff' }}>
    <div className="CommentInfo__name" style={{ fontWeight: 'bold' }}>
      {comment.name}
    </div>
    <div
      className="CommentInfo__email"
      href={`mailto:${comment.email}`}
      style={{ color: 'gray' }}
    >
      {comment.email}
    </div>
    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
