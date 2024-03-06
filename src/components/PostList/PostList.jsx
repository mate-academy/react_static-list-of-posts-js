import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
