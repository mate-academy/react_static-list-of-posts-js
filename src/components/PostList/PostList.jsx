import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <>
      {posts.map(item => (
        <PostInfo info={item} key={item.id} />
      ))}
    </>
  );
};
