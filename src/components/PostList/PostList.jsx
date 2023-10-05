import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </ul>
);
