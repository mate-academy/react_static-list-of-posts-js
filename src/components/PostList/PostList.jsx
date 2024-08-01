import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) =>
  posts.map(post => (
    <div key={post.id} className="PostList">
      <PostInfo post={post} />
    </div>
  ));
