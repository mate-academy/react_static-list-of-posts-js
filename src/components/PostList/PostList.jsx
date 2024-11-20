import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  const postsInfo = posts.map(post => <PostInfo key={post.id} post={post} />);

  return <div className="PostList">{postsInfo}</div>;
};
