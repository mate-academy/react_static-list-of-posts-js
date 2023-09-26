
import './UserInfo.scss'; // Import the corresponding SCSS file

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
