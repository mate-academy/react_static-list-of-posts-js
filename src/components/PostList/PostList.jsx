import { PostInfo } from '../PostInfo';

export const PostList = ({ post }) => (
  <PostInfo post={post} key={post.id} />
);
