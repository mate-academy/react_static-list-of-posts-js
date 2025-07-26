'user strict';

import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => {
      return <PostInfo info={post} key={post.id} />;
    })}
  </div>
);
