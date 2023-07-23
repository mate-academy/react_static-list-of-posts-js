import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (user) {
    const {
      email,
      name,
    } = user;

    return (
      <a className="UserInfo" href={email ? `mailto:${email}` : '#'}>
        {name}
      </a>
    );
  }

  return '';
};
