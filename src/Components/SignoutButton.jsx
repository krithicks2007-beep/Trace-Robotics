import React from 'react';

const SignoutButton = ({ onSignout }) => {
  const handleSignout = () => {
    if (onSignout) {
      onSignout();
    } else {
      alert("Sign out clicked! You can integrate your authentication systems here.");
    }
  };

  return (
    <button className="signout-btn" onClick={handleSignout} title="Sign Out">
      <i className="fa-solid fa-arrow-right-from-bracket"></i>
      <span>Sign Out</span>
    </button>
  );
};

export default SignoutButton;
