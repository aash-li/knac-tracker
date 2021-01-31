// Credit to pkuang5

import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '608833851290-55503koreo294pqg48nqpqu6lpi549ka.apps.googleusercontent.com' //insert client id here

function Logout(props) {
  const [clickedLogoutButton, setClickedLogoutButton] = useState(false)

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    props.setLoggedIn(false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;