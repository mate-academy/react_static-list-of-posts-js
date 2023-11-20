import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => <PostInfo key={post.id} post={post} />)}
  </ul>
);
