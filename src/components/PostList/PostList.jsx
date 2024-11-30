import { PostInfo } from '../PostInfo';

export const PostsList = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </>
);
