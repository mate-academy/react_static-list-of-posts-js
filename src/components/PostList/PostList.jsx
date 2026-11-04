import users from '../../api/users.json';
import { PostInfo } from '../PostInfo/PostInfo';
import commentsFromServer from '../../api/comments.json';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const { id, userId } = post;
        const user = users.find(elem => elem.id === userId);
        const postComments = commentsFromServer.filter(
          elem => elem.postId === id,
        );
        const postWithUser = {
          ...post,
          user,
          comments: postComments,
        };

        return user && <PostInfo post={postWithUser} key={id} />;
      })}
    </div>
  );
};
