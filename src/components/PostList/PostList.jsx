import { PostInfo } from '../PostInfo';

export const PostList = ({ Posts }) => (
  <div className="PostList">
    {Posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
