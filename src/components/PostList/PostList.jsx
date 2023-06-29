import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
    {/* <b data-cy="NoCommentsMessage">No comments yet</b> */}
  </div>
);
