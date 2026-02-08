import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </>
  );
};
