import { PostInfo } from '../PostInfo';

export const PostList = ({ enrichedPosts }) => (
  <div className="PostList">
    {enrichedPosts.map(post => (
      <PostInfo key={post.id} post={post} comments={post.body} />
    ))}
  </div>
);
