export const UserInfo = ({ user: { name, email, username } }) => (
  <a className="UserInfo" href={`mailto:${email || 'email unidentified'}`}>
    {name || (username || 'name unidentified')}
  </a>
);
