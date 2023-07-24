import { PostInfo } from '../PostInfo';

function getUserById(users, userId) {
  return users.find(user => user.id === userId);
}

function getCommentsById(comments, idOfPost) {
  return comments.filter(comment => comment.postId === idOfPost);
}

export const PostList = ({
  postsFromServer, commentsFromServer, usersFromServer,
}) => {
  const posts = postsFromServer.map(post => ({
    ...post,
    user: getUserById(usersFromServer, post.userId),
    comments: getCommentsById(commentsFromServer, post.id),
  }));

  return (
    <div className="PostList">
      {posts.map(post => <PostInfo key={post.id} post={post} />)}
    </div>
  );
};
