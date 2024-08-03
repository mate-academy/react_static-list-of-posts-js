import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => post.user && <PostInfo post={post} key={post.id} />)}
  </div>
);
