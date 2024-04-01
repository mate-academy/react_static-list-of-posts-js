import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
