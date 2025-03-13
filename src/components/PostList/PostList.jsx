import { PostInfo } from '../PostInfo';

export const PostList = ({ postsData }) => (
  <div className="PostList">
    {postsData.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
