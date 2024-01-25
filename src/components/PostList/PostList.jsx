import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ postsFromServer }) => (
  <div className="PostList">
    {postsFromServer.map(post => (
      <PostInfo
        post={post}
        key={post.id}
      />
    ))}
  </div>
);
