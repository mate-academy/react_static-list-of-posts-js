import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) =>
  posts.map(post => (
    <div className="PostList">
      <PostInfo post={post} key={post.id} />
    </div>
  ));
