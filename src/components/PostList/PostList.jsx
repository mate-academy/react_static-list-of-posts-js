import { PostInfo } from '../PostInfo';

export const PostList = ({ usersWithPosts }) => (
  <div className="PostList">
    {usersWithPosts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
