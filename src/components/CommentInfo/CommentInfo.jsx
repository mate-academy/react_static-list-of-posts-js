import comments from '../../api/comments.json';

export const CommentInfo = () => (
  <>
    {comments.map(comment => (
      <div className="CommentInfo" key={comment.id}>
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{comment.name}</strong>

          {' by '}

          <a className="CommentInfo__email" href={comment.email}>
            {comment.name}
          </a>
        </div>

        <div className="CommentInfo__body">{comment.body}</div>
      </div>
    ))}
  </>
);
