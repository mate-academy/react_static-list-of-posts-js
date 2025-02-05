import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo/UserInfo';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const post = commentsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
}));

function getCommentById(commentId) {
  return usersFromServer.find(comment => comment.id === commentId) || null;
}

export const comment = commentsFromServer.map(comment => ({
  ...comment,
  user: getCommentById(comment.commentId),
}));

export const PostInfo = ({ post }) =>
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo
            key={getUserById(post.userId).id}
            user={getUserById(post.userId)}
          />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      <b data-cy="NoCommentsMessage">No comments yet</b>
    </div>

    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}


          <UserInfo
            key={getUserById(post.userId).id}
            user={getUserById(post.userId)}
          />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <div className="CommentList">
        <div className="CommentInfo">
          <div className="CommentInfo__title">
            <strong className="CommentInfo__name">{commentsFromServer.name}</strong>

            {' by '}

            <a
              className="CommentInfo__email"
              href={`mailto:${commentsFromServer.email}}`}
            >
              {getCommentById(comment.commentId)}
            </a>
          </div>

          <div className="CommentInfo__body">
            {commentsFromServer.body}
          </div>
        </div>

        <div className="CommentInfo">
          <div className="CommentInfo__title">
            <strong className="CommentInfo__name">
              {commentsFromServer.name}
            </strong>

            {' by '}

            <a
              className="CommentInfo__email"
              href={`mailto:${commentsFromServer.email}}`}
            >
              {usersFromServer.email}
            </a>
          </div>

          <div className="CommentInfo__body">
            {commentsFromServer.body}
          </div>
        </div>
      </div>
    </div>

  </>
