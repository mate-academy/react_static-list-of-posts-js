import { PostInfo } from '../PostInfo';
import './PostList.scss';

export function PostList({ posts }) {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
}
