import './LogIn.css';

const LogIn = () => {
  return (
    <div className='login-container'>
      <h1>Log In</h1>
      <input
        type='text'
        name='Benutzername'
        placeholder='Benutzername'
        id='user'
      />
      <input type='text' name='Password' placeholder='Password' id='passwort' />
      <button>Submit</button>
    </div>
  );
};

export default LogIn;
