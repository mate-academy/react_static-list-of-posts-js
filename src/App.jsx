import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

// Prepara os posts para que cada um já venha com o usuário e os comentários
// relacionados, em vez de depender de dados separados no restante da árvore.
const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    {/* Envia a lista de posts já preparada para o componente responsável por exibi-los */}
    <PostList posts={preparedPosts} />
  </section>
);
