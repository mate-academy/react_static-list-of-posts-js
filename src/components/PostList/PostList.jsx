import postsFromServer from '../../api/posts.json';
import usersFromServer from '../../api/users.json';
import commentsFromServer from '../../api/comments.json';
import { PostInfo } from '../PostInfo/PostInfo';

export const posts = postsFromServer.map(post => {
  // Encontra o usuário do post
  const user = usersFromServer.find(u => u.id === post.userId) || null;

  // Filtra APENAS os comentários que pertencem a ESSE post
  const comments = commentsFromServer.filter(c => c.postId === post.id);

  // Retorna o post tunado com as duas novas propriedades
  return {
    ...post,
    user,
    comments,
  };
});

export const PostList = () => (
  <div className="PostList">
    {/* Aqui você faz o loop na nossa array 'posts' que já tem tudo dentro */}
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
)
