import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <>
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} user={post.user} key={post.id} />
      ))}
    </div>
  </>
);
