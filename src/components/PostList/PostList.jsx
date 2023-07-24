import { PostInfo } from '../PostInfo';

export const PostList = ({
  postsFromServer, commentsFromServer, usersFromServer,
}) => {
  function getUserById(userId) {
    return usersFromServer.find(user => user.id === userId);
  }

  function getCommentsById(idOfPost) {
    return commentsFromServer.filter(comment => comment.postId === idOfPost);
  }

  const posts = postsFromServer.map(post => ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  }));

  return (
    <div className="PostList">
      {posts.map(post => <PostInfo key={post.id} post={post} />)}
    </div>
  );
};
