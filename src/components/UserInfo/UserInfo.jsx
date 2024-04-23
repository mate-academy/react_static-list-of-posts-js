import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const {email, name} = user;

  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
};
