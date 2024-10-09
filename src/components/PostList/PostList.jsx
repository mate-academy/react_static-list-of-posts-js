import { PostInfo } from '../PostInfo/PostInfo';
import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';
import './PostList.scss'

export const PostList = () => {
  const modifyPostsList = postsFromServer.map(post => {
    const author = usersFromServer.find(user => user.id === post.userId);
    const comments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return {
      ...post,
      user: author,
      comments,
    };
  });

  return (
    <div className="PostList">
      {modifyPostsList.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
