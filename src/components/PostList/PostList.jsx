import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <>
    {
      posts.map(post => (
        <div className="PostList">
          <PostInfo post={post} />
        </div>
      ))
    }
  </>
);
