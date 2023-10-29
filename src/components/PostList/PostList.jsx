import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ mergeList }) => (
  <div className="PostList">
    {
      mergeList.map(post => (
        <PostInfo post={post} key={post.id} />
      ))
    }
  </div>
);
