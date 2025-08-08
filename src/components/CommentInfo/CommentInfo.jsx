import './CommentInfo.scss';

const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <h4 className="CommentInfo__name">{comment.name}</h4>
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);

export default CommentInfo;
