import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="PostList">
      {posts.map(p => (
        <PostInfo key={p.id} post={p} />
      ))}
    </div>
  );
};
