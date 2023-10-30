import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users }) => (
  <div className="PostList">
    {posts.map((post) => {
      const user = users.find(u => u.id === post.userId);

      return <PostInfo post={post} user={user} key={post.id} />;
    })}
  </div>
);
