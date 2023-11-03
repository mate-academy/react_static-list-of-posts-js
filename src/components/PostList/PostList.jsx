import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <div className="PostInfo" key={post.id}>
      <PostInfo post={post} />
    </div>
  ))
);
