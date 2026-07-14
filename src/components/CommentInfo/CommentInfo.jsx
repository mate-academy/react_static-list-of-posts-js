export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      {/* Nome do autor do comentário */}
      <strong className="CommentInfo__name">{comment.name}</strong>

      {' by '}

      {/* E-mail do autor, com link para envio de e-mail */}
      <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
        {comment.email}
      </a>
    </div>

    {/* Conteúdo principal do comentário */}
    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
