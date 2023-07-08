import './PostInfo.scss';
// import commentsFromServer from '../../api/comments.json';
// import postsFromServer from '../../api/posts.json';
// import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

// function getUserById(userId) {
//   return usersFromServer.find(user => user.id === userId)
//   || null;
// }

// function getCommentById(commentId) {
//   return commentsFromServer.find(comment => comment.postId === commentId)
//     || 'not comments yet';
// }

// const postsWithUserAndComment = postsFromServer.map(post => ({
//   ...post,
//   user: getUserById(post.userId),
//   comment: getCommentById(post.id),
// }));

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <CommentList comments={post.comments} />
  </div>
);
