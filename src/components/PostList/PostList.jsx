import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => {
      const filteredComments = commentsFromServer.filter(
        comment => comment.postId === post.id,
      );
      const findUser = usersFromServer.find(user => user.id === post.userId);

      return (
        <PostInfo
          key={post.id}
          post={post}
          user={findUser}
          comments={filteredComments}
        />
      );
    })}
  </div>
);
