import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return posts.map(item => <PostInfo key={item.id} post={item} />);
};
