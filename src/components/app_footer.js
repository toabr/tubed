import React from 'react';

export default function AppHeader() {
  return(
    <footer id="footer">
      <div className="container">
        <div className="link-wrapper">
          <a href="https://youtube.com" target="blank" >
            <img
            src={require('../img/developed-with-youtube-lowercase-light.png')}
            alt="developed-with-youtube"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
