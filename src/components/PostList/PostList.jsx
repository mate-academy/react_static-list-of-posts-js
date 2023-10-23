import { PostInfo } from '../PostInfo';

export const PostList = ({ postL }) => (
  <>
    <div className="PostList">
      {postL.map(post => (
        <PostInfo
          post={post}
          key={post.id}
        />
      ))}
    </div>
  </>
);
