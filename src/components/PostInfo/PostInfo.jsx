import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  /* ✅ Com chaves `{}` → retorno explícito
const sum = (x) => {
  return x.a + x.b;
};
- Quando você **usa chaves**, precisa usar `return` explicitamente.
- Isso é útil quando você quer fazer mais de uma coisa dentro da função
(como declarar variáveis, usar `if`, etc). */
  let message;

  if (post.comments?.length > 0) {
    message = <CommentList comments={post.comments} />;
  } else {
    message = <span data-cy="NoCommentsMessage">No comments yet</span>;
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        {post.user && <UserInfo user={post.user} />}
      </div>
      <p className="PostInfo__body">{post.body}</p>
      {message}
    </div>
  );
};

/* comments
{
  id: 1,                // vem do postsFromServer
  title: "Título do post",
  body: "Texto do post",
  userId: 2,            // referência original
  user: {               // objeto completo do autor
    id: 2,
    name: "Maria",
    email: "maria@email.com"
  },
  comments: [           // todos os comentários ligados a esse post
    {
      id: 1,
      postId: 1,
      name: "João",
      email: "joao@email.com",
      body: "Muito bom!"
    },
    {
      id: 2,
      postId: 1,
      name: "Ana",
      email: "ana@email.com",
      body: "Gostei bastante"
    }
  ]
}
*/
