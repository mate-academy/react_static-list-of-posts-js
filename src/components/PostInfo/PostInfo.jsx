import { UserInfo } from '../UserInfo/index';
import { CommentList } from '../CommentList/index';
import './PostInfo.scss';

export const PostInfo = ({ propsInfo }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title"> {propsInfo.title} </h3>
      <UserInfo propsUser={propsInfo.user} />
    </div>
    <p className="PostInfo__body"> {propsInfo.body} </p>

    <hr />
    {propsInfo.comments.length > 0 ? (
      <CommentList propsComments={propsInfo.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
/**
 * <div className="PostInfo__header">
          <h3 className="PostInfo__title"> {posts[2].title} </h3>

          <p>
            {' Posted by  '}

            <a className="UserInfo" href={`mailto:${posts[2].email}`}>
              {posts[0].name}
            </a>
          </p>
        </div>

        <p className="PostInfo__body"> {posts[2].body} </p>

        <hr />

        <b data-cy="NoCommentsMessage">{posts[2].comment[0].body}</b>
 */
