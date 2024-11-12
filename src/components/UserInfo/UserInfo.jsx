// eslint-disable-next-line import/no-cycle
import { getMailTo } from '../../App';
import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={getMailTo(user.email)}>
    {user.name}
  </a>
);
