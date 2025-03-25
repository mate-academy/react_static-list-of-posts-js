import { PostInfo } from "../PostInfo/PostInfo";

export const PostList = ({ posts }) => (
  <div className="PostList">
      {posts.map(p => (
        <PostInfo key={p.id} post={p} />
      ))}
    </div>
);
