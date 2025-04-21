import { PostInfo } from '../PostInfo';

function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
