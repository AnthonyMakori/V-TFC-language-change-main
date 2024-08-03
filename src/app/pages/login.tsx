// pages/login.js
import React from 'react';
import styles from '../styles/Login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <img src="/ftc-logo.png" alt="FTC Logo" />
        </div>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email address" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" />
            <span className={styles.showPassword}>👁️</span>
          </div>
          <div className={styles.rememberMe}>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className={styles.forgotPassword}>
            <a href="#">Forget password?</a>
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
          <button type="button" className={styles.signupButton}>Signup</button>
        </form>
        <button className={styles.homeButton}>Home</button>
      </div>
    </div>
  );
};

export default LoginPage;
