import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(e => (
      <PostInfo key={e.id} post={e} />
    ))}
  </div>
);
