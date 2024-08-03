// pages/register.js
import React from 'react';
import styles from '../styles/Register.module.css';

const RegisterPage = () => {
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
          <div className={styles.agreement}>
            <input type="checkbox" id="agreement" name="agreement" />
            <label htmlFor="agreement">
              By signing up I agree that I’m 18 years of age or older, to the User Agreements, Privacy Policy, Cookie Policy, E-Sign Consent
            </label>
          </div>
          <button type="submit" className={styles.signupButton}>Sign up</button>
        </form>
        <div className={styles.loginLink}>
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
