import { PostInfo } from '../PostInfo';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

function getCommentByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => {
      const comments = getCommentByPostId(post.id);
      const postWithComments = {
        ...post,
        comments,
        user: usersFromServer.find(user => user.id === post.userId),
      };

      return (
        <PostInfo post={postWithComments} key={postWithComments.id} />
      );
    })}
  </div>
);
