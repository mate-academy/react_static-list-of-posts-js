import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <>
      {posts.map(item => (
        <PostInfo post={item} key={item.id} />
      ))}
    </>
  );
};
