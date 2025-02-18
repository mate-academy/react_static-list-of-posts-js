import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import usersFromServer from '../../api/users.json';
import commentsFromServer from '../../api/comments.json';

export const PostList = ({ posts }) => {
  // const getUserById = userId => {
  //   return usersFromServer.find(user => user.id === userId);
  // };

  // const getCommentsByPostId = postId => {
  //   return commentsFromServer.filter(comment => comment.postId === postId);
  // };

  const getPostWithComments = post => {
    const user = usersFromServer.find(u => u.id === post.userId);
    const comments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return {
      userId: user.id,
      id: post.id,
      title: post.title,
      body: post.body,
      user,
      comments,
    };
  };

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={getPostWithComments(post)} />
      ))}
    </div>
  );
};
