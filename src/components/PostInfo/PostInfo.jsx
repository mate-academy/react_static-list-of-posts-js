import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <Header post={post} />
      <p className="PostInfo__body">{post.body}</p>
      {post.comments.length === 0 ? (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      ) : (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};

const Header = ({ post }) => {
  return (
    <div className="PostInfo__header">
      <Title title={post.title} />

      {post.user && (
        <p>
          {' Posted by  '}
          <UserInfo email={post.user.email} name={post.user.name} />
        </p>
      )}
    </div>
  );
};

const Title = ({ title }) => {
  return <h3 className="PostInfo__title">{title}</h3>;
};
