import { PostInfo } from '../PostInfo';

export const PostList = ({ allPostsData }) => (
  <div className="PostList">
    {allPostsData.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
