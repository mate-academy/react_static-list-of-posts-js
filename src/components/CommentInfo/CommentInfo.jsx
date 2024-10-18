// import { UserInfo } from '../UserInfo/UserInfo';

export const CommentInfo = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {comment.name || 'Anonymous'}
        </strong>
        {' by '}
        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {comment.body || 'No content available.'}
      </div>
    </div>
  );
};

export default CommentInfo;
