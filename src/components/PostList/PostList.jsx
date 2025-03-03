import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) =>
  posts.map(post => <PostInfo post={post} key={post.id} />);
