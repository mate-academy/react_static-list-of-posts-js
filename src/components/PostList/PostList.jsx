import { PostInfo } from '../PostInfo/PostInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        return (
          <div key={post.id} className="PostInfo">
            <PostInfo post={post} />
            <CommentList coments={post.comments} />
          </div>
        );
      })}
    </div>
  );
};
