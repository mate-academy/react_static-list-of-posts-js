import React from 'react';
import './UserInfo.scss';

/**
 * Renders user information from a single 'user' object prop.
 *
* @param {object} props - The component props.
 * @param {object} props.user - The object containing user data (e.g., { name, email }).
 * @param {string} [props.className] - Optional class name for the main wrapper.
 * @returns {JSX.Element} The rendered user information.
 */
export const UserInfo = ({ user, className }) => {
  // Define the base class for the component.
  const baseClass = 'user-info-card';
  
  // Combine the base class with any provided className prop.
  const wrapperClass = className ? `${baseClass} ${className}` : baseClass;

  // If the 'user' object is missing, render the wrapper with fallback text.
  if (!user) {
    return (
      <div className={wrapperClass}>
        {/* Provide the default structure and content for the fallback */}
        By: Unknown author
      </div>
    );
  }

  // If the user exists, render the full user card.
  return (
    <div className={wrapperClass}>
      <h3>User Information</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default UserInfo;