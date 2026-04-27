import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ resultPosts }) => (
  <div className="PostList">
    {resultPosts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
