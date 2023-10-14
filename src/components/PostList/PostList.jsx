import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, commentsList, users }) => (
  <div className="PostList">
    {posts.map((post) => {
      const postExtra = {
        ...post,
        user: users.find(user => post.userId === user.id),
        comments: commentsList
          .filter(comment => comment.postId === post.id),
      };
      // assembled the postExtra above for test compitability

      return (
        <PostInfo
          post={postExtra}
          key={post.id}
        />
      );
    })}
  </div>
);
