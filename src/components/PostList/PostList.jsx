import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {/* Renderiza um bloco de post para cada item da lista */}
    {posts.map(post => {
      // Evita renderizar posts sem usuário associado, preservando a consistência do conteúdo.
      if (!post.user) return null;

      return (
        // A key deve ficar no elemento raiz retornado pelo map para o React identificar corretamente cada item.
        <div key={post.id} className="PostList__item">
          <PostInfo post={post} />
        </div>
      );
    })}
  </div>
);
