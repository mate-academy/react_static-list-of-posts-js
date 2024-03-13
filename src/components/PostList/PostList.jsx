import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) =>
  posts.map(post => <PostInfo post={post} key={post.id} />);
