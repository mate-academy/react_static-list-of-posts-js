import { CommentInfo } from "../CommentInfo/CommentInfo";

export const CommentList = ({comments}) => (
  comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <div className="CommentList">
        {comments.map(comment => (
          /* O componente mais fundo entra aqui, recebendo o objeto "comment" e a key */
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    )
)
