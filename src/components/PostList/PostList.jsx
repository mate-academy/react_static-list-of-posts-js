import { PostInfo } from '../PostInfo/PostInfo';
import users from '../../api/users.json';
import comments from '../../api/comments.json';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const postWithComments = { ...post };

        postWithComments.user = users.find(user => user.id === post.userId);
        postWithComments.comments = comments.filter(
          comment => comment.postId === post.id,
        );

        return <PostInfo post={postWithComments} key={postWithComments.id} />;
      })}
    </div>
  );
};
