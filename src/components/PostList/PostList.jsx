import { PostInfo } from '../PostInfo/PostInfo';
import { CommentList } from '../CommentList/CommentList';

function getUserById(users, id) {
  return users.filter(user => {
    return user.id === id;
  });
}

function getComentsById(comments, id) {
  return comments.filter(comment => {
    return comment.postId === id;
  });
}

export const PostList = ({ posts, comments, users }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const id = post.userId;
        const resp = getUserById(users, id);
        const user = resp.length ? resp[0] : null;
        const comentsUserById = getComentsById(comments, user.id);

        return (
          <div key={post.id} className="PostInfo">
            <PostInfo post={post} email={user.email} name={user.name} />
            <CommentList coments={comentsUserById} />
          </div>
        );
      })}
    </div>
  );
};
