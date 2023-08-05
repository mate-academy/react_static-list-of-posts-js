import PropTypes from 'prop-types';
import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (!user) {
    return <div className="error-message">User info is unavailable.</div>;
  }

  const { email, name } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

UserInfo.defaultProps = {
  user: {
    email: '',
    name: '',
  },
};
