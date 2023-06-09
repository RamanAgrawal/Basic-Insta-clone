import React from 'react';

const InstagramLoginButton = () => {
  const handleLogin = () => {
    const clientId = '618981290211297';
    const redirectUri = 'http://localhost:3000/redirect';
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
    window.location.href = authUrl;
  };

  return (
    <button onClick={handleLogin}>Log in with Instagram</button>
  );
};

export default InstagramLoginButton;
