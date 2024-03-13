import comments from '../../api/comments.json';
import './CommentInfo.scss';

export function CommentInfo({ commentId }) {
  const targetComment = comments.find(comment => comment.id === commentId);

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{targetComment.name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${targetComment.email}`}
        >
          {targetComment.email}
        </a>
      </div>

      <div className="CommentInfo__body">{targetComment.body}</div>
    </div>
  );
}
