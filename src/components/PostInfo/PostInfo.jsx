import { CommentList } from '../CommentList';

export const PostInfo = ({ todos }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {todos.title}
        </h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href={todos.user.email}>
            {todos.user.username}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">
        {todos.body}
      </p>
      {todos.comments.length !== 0
        ? (
          <CommentList
            comments={todos.comments}
          />
        )
        : (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
      }
    </div>
  </>
);
