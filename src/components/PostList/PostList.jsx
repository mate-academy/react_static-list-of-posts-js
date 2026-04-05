import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts = [] }) => (
  <div className="PostList">
    {posts.map(currentPost => (
      <PostInfo post={currentPost} key={currentPost.id} />
    ))}
  </div>
);
