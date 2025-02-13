const RegisterForm = () => {
  return (
    <div className='login-container'>
      <h1>Registriere dich</h1>
      <form action='/register' method='POST' className='form'>
        <input type='text' name='vorname' placeholder='Vorname' />
        <input type='text' name='nachname' placeholder='Nachname' />
        <input type='text' name='email' placeholder='Email' />
        <input type='text' name='benutzername' placeholder='Benutzername' />
        <input type='password' name='passwort' placeholder='Passwort' />
        <button type='submit'>Registiere mich</button>
      </form>
    </div>
  );
};

export default RegisterForm;
