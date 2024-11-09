import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  // console.log('server', serverProps);

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
