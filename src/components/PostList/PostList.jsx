import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </>
);
