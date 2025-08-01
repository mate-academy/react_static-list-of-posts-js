import './UserInfo.scss';

export const UserInfo = props => {
  if (props.user) {
    const { user } = props;

    if (!user.name || !user.email) return null;

    return (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    );
  }

  const { name, mail } = props;

  if (!name || !mail) return null;

  return (
    <a className="UserInfo" href={`mailto:${mail}`}>
      {name}
    </a>
  );
};
