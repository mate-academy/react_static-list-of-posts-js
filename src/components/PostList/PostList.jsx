import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
