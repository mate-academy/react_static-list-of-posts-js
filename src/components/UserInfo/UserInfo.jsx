export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email || 'email unidentified'}`}>
    {user.name || 'user name'}
  </a>
);
