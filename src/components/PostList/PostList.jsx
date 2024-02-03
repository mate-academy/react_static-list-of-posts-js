import { PostInfo } from '../PostInfo';

export const PostList = ({ postsUsers }) => (
  <div className="PostList">

    {postsUsers.map(post => (

      <PostInfo post={post} key={post.id} />
    ))}
    {/* <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">qui est esse</h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href="mailto:Sincere@april.biz">
          Leanne Graham
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae
      ea dolores neque fugiat blanditiis voluptate porro vel nihil
      molestiae ut reiciendis qui aperiam non debitis possimus qui neque
      nisi nulla
    </p>

    <hr />

    <b data-cy="NoCommentsMessage">No comments yet</b>
  </div> */}
  </div>
);
