import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

export const PostList = ({ posts }) => {
  const { id } = posts;

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={id} post={post} />
      ))}
    </div>
  );
};
