import React, { useState } from 'react';
import './InstagramLogin.css';
import phonesImage from './phones.png';
import logoImage from './logo.png'; 

const InstagramLogin = () => {
  // --- STATE ---
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // --- HANDLERS ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      alert(`Logging in as: ${username}\n(Simulation)`);
    } else {
      alert("Please enter a username and password.");
    }
  };

  const handleFacebook = () => {
    alert("Redirecting to Facebook...");
  };

  const handleForgot = (e) => {
    e.preventDefault();
    alert("Reset password link sent!");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Switching to Sign Up page...");
  };

  
  const handleLogoClick = () => {
    window.location.reload(); 
  };

  return (
    <div className="main-wrapper">
      
      {/* --- TOP LEFT LOGO --- */}
      <img 
        src={logoImage} 
        alt="Instagram Logo" 
        className="top-left-logo" 
        onClick={handleLogoClick}
      />

      <div className="page-container">
        
        {/* Left Side */}
        <div className="left-side">
          <h1 className="marketing-header">
            See everyday moments from<br />
            your <span className="gradient-text">close friends</span>.
          </h1>
          <img 
            src={phonesImage} 
            alt="Instagram Preview" 
            className="phones-image" 
          />
        </div>

        {/* Right Side */}
        <div className="right-side">
          <div className="login-box">
            
            {/* Center Logo (Cursive Text) */}
            <h1 className="logo-text">Instagram</h1>

            {/* Login Form */}
            <form className="login-form" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="login-btn">
                Log in
              </button>
            </form>

            <div className="separator">
              <div className="line"></div>
              <div className="or-text">OR</div>
              <div className="line"></div>
            </div>

            <div className="facebook-login" onClick={handleFacebook}>
              <span className="fb-icon">f</span>
              <span>Log in with Facebook</span>
            </div>

            <a href="#" className="forgot-password" onClick={handleForgot}>
              Forgot password?
            </a>
          </div>

          <div className="signup-box">
             <span>Don't have an account? </span>
             <a href="#" className="signup-link" onClick={handleSignUp}>
               Sign up
             </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Threads</a>
          <a href="#">Contact Uploading & Non-Users</a>
          <a href="#">Meta Verified</a>
        </div>
        <div className="footer-copyright">
          English (UK) &nbsp; © 2026 Instagram from Meta
        </div>
      </footer>

    </div>
  );
};

export default InstagramLogin;