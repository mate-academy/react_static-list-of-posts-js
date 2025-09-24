import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts && posts.length > 0
      ? posts.map(post => <PostInfo key={post.id} post={post} />)
      : null}
  </div>
);
