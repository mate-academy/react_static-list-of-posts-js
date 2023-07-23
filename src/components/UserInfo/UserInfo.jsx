import { PropTypes } from 'prop-types';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const {
    email,
    name,
  } = user;

  return (
    <a className="UserInfo" href={email ? `mailto:${email}` : '#'}>
      {name}
    </a>
  );
};

UserInfo.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
