import { PostInfo } from '../PostInfo';

export function PostList({ posts }) {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}
