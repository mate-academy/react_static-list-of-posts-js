import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = props => {
  const { posts } = props;

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
