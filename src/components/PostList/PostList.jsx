import { PostInfo } from '../PostInfo';

/* const postWithComments = {
  userId: 2,
  id: 11,
  title: 'et ea vero quia laudantium autem',
  body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
  user: {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  comments: [
    {
      postId: 11,
      id: 52,
      name: 'esse autem dolorum',
      email: 'Abigail.OConnell@june.org',
      body: 'et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mollitia fugit qui repellat expedita sunt\naut fugiat vel illo quos aspernatur ducimus',
    },
    {
      postId: 11,
      id: 53,
      name: 'maiores alias necessitatibus aut non',
      email: 'Laverne_Price@scotty.info',
      body: 'a at tempore\nmolestiae odit qui dolores molestias dolorem et\nlaboriosam repudiandae placeat quisquam\nautem aperiam consectetur maiores laboriosam nostrum',
    },
    {
      postId: 11,
      id: 54,
      name: 'culpa eius tempora sit consequatur neque iure deserunt',
      email: 'Kenton_Vandervort@friedrich.com',
      body: 'et ipsa rem ullam cum pariatur similique quia\ncum ipsam est sed aut inventore\nprovident sequi commodi enim inventore assumenda aut aut\ntempora possimus soluta quia consequatur modi illo',
    },
  ],
};
 */
export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
