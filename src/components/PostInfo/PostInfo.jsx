import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  // Extrai os dados já preparados do post para facilitar a renderização.
  const { user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        {/* Título do post */}
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {/* Exibe o nome do usuário que fez o post */}
          <UserInfo user={user} />
        </p>
      </div>

      {/* Corpo do post */}
      <p className="PostInfo__body">{post.body}</p>

      {/* Lista de comentários relacionados ao post */}
      <CommentList comments={comments} />
    </div>
  );
};
