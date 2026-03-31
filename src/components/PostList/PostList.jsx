import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => {
      return <PostInfo key={post.id} post={post} />;
    })}
  </div>
);
