import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.length
      ? posts.map(post => <PostInfo post={post} key={post.id} />)
      : null}
  </div>
);
