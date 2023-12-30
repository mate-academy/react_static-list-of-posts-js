import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <section className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
        key={post.id}
      />
    ))}
  </section>
);
