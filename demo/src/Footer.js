import React from 'react';

function Footer(props) {
  return (
    <div className="bg-yellow mt-5 py-5">
      <div className="container">
        <div className="text-center text-secondary">
          <p>Made by{' '}
            <a className="text-secondary" href="https://github.com/Riwibou">
              <strong >Riwibou</strong>
            </a> with React piano
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
