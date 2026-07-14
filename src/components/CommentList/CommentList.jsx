import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments = [] }) => (
  <div className="CommentList">
    {/* Se não houver comentários, mostra uma mensagem indicando que ainda não há itens */}
    {comments.length === 0 ? (
      <div data-cy="NoCommentsMessage">There are no comments yet</div>
    ) : (
      // Renderiza cada comentário dentro de um container que recebe a key correta.
      comments.map(comment => (
        <div key={comment.id} className="CommentList__item">
          <CommentInfo comment={comment} />
        </div>
      ))
    )}
  </div>
);
