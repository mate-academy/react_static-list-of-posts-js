import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
//  <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
//               Patricia Lebsack
//             </a>
