export const UserInfo = ({ user }) => (
  <div>
    <a href={`mailto:${user.email}`} className="UserInfo">
      {user.name}
    </a>
  </div>
);
