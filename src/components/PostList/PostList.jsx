import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(postInfo => {
      return <PostInfo key={postInfo.post.id} postInfo={postInfo} />;
    })}
  </div>
);
