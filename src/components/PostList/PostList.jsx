import { PostInfo } from '../PostInfo';

export const PostList = ({ postsUsers }) => (
  <div className="PostList">

    {postsUsers.map(post => (

      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
