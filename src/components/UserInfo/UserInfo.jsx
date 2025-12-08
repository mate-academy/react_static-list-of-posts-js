// export const UserInfo = ({user}) => (<>Put the user here</>);

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
