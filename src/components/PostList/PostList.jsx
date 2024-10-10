import { PostInfo } from '../PostInfo';

export const PostList = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
