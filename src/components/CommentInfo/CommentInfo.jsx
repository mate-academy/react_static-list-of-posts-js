import './CommentInfo.scss';

export const CommentInfo = ({ commentUserInfo }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {commentUserInfo.comment.name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${commentUserInfo.comment.email}`}
      >
        {commentUserInfo.comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">{commentUserInfo.comment.body}</div>
  </div>
);
