import React from 'react';

function Header() {
  return (
    <div style={{ background: '#333' }}>
      <div className="container">
        <div className="text-sm-center text-white py-5">
          <h1>React piano Keybord</h1>
          <p>
            An interactive piano keyboard for React.
          </p>
          <h5>Feel free to use the library of intruments to change the sound of the piano keybord.</h5>
          <div className="mt-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
