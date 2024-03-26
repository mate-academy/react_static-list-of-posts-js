import { CommentList } from '../CommentList';

export const PostInfo = ({ posts, users, comments }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">

        <h3 className="PostInfo__title">{posts.title}</h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href={`mailto:${users.filter(item => item.id === posts.userId)[0].email}`}>
            {users.filter(item => item.id === posts.userId)[0].name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">
        {/* est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae
        ea dolores neque fugiat blanditiis voluptate porro vel nihil
        molestiae ut reiciendis qui aperiam non debitis possimus qui neque
        nisi nulla */}
        {posts.body}
      </p>

      <hr />

      {/* <b data-cy="NoCommentsMessage">No comments yet</b> */}

      <CommentList
        posts={posts}
        users={users}
        comments={comments}
      />
    </div>
  </>
);
