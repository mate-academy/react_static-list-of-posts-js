import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">

    {posts.map(post => <PostInfo post={post} key={posts.id} />)}
  </div>
);
