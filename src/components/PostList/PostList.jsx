import { PostInfo } from '../PostInfo/PostInfo';

export function PostList({ posts }) {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} comments={post.comments} key={post.id} />
      ))}
    </div>
  );
}
