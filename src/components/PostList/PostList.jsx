import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ enrichedPosts }) => (
  <div className="PostList">
    {enrichedPosts.map(post => (
      <PostInfo key={post.id} post={post} comments={post.body} />
    ))}
  </div>
);
