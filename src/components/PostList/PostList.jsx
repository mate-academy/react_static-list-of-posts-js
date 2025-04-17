import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      return (
        <PostInfo
          post={post}
          comments={comments.filter(comment => post.id === comment.postId)}
          key={post.id}
        />
      );
    })}
  </div>
);
