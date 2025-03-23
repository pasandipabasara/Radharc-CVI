import React from 'react';

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <button>Sign in Google</button>
      <button>Sign in Facebook</button>
      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
      </form>
      <p>Don't have an account? Click here.</p>
    </div>
  );
};

export default SignUp;