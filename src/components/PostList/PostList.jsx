import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts, users, comments }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const postAuthor = users.find(user => user.id === post.userId);

        const postComments = comments.filter(
          comment => comment.postId === post.id,
        );

        return (
          <PostInfo
            key={post.id}
            post={post}
            user={postAuthor}
            comments={postComments}
          />
        );
      })}
    </div>
  );
};
