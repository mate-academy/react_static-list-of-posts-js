import { CommentList } from "../CommentList"

export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="UserInfo" href={`mailto:${user.email}`} data-cy="UserInfo">
      {user.name}
    </div>
  );
};
