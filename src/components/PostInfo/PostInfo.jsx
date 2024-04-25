import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post, user }) => {
  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>
    </>
  );
};
