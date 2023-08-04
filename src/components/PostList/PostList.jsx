import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <div className="PostList">
      <PostInfo
        key={post.id}
        post={post}
      />
    </div>
  ))
);
