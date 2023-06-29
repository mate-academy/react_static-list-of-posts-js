import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <section key={posts.id} className="PostList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </section>
);
