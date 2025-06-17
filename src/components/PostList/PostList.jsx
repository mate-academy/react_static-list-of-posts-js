import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
