// import './UserInfo.scss';

// export const UserInfo = ({ user, showEmailOnly }) => (
//   <>
//     {user &&
//       (showEmailOnly ? (
//         <a className="UserInfo" href={`mailto:${user.email}`}>
//           {user.email}
//         </a>
//       ) : (
//         <a className="UserInfo" href={`mailto:${user.email}`}>
//           {user.name}
//         </a>
//       ))}
//   </>
// );

import './UserInfo.scss';

export const UserInfo = ({ user, showEmailOnly }) => {
  {console.log(user)}
  return (
    <>
      {user &&
        (showEmailOnly ? (
          <a className="UserInfo" href={`mailto:${user.email}`}>
            {user.email}
          </a>
        ) : (
          <a className="UserInfo" href={`mailto:${user.email}`}>
            {user.name}
          </a>
        ))}
    </>
  );
};
