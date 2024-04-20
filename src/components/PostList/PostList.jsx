import { PostInfo } from "../PostInfo";

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      <PostInfo posts={posts}/>
    </div>
  )
};
