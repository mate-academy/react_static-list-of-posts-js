import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  // -  Para cada objeto user dentro do array usersFromServer,
  // a funcao verifica se o id desse usuário é igual ao userId que foi passado como parâmetro(o find procura dentro do array).
  return (
    usersFromServer.find(user => user.id === userId) || null
  ); /* ✅ Sem chaves `{}` → retorno implícito

const sum = (x) => x.a + x.b;

- Quando a função tem **apenas uma expressão**, você pode omitir as chaves `{}` e o `return`. */
}

function getCommentsByPostId(postId) {
  // filter é executado callbackuma vez para cada elemento e
  // coloca os elementos para os quais callbackretorna um valor verdadeiro em uma nova matriz resultante.
  return (
    // Ou seja, ele retorna todos os comentários cujo postId seja igual ao id do post que você está buscando.
    commentsFromServer.filter(comment => comment.postId === postId) || null
  );
}

export const posts = postsFromServer.map(post => ({
  ...post, // - Copia todas as propriedades originais do objeto post (como id, title, body, userId).
  /* - Aqui você está chamando a função getUserById passando o userId do post atual.
- Como o .map() já forneceu um objeto post para a função, post.userId existe e pode ser usado.
- O resultado é o objeto completo do usuário que será anexado ao novo post. */
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
