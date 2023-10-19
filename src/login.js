import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton'; 
import Box from '@mui/material/Box'; 
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [userErr, setUserErr] = useState(false);
  const [mailErr, setMailErr] = useState(false);
  const [err, setErr] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validIcon, setValidIcon] = useState(false);
  const navigate = useNavigate();

  function loginHandle(e) {
    e.preventDefault();
    setErr('');

    if (user === '' || password === '') {
      setErr('Fill in the necessary details');
      return;
    } else if (mailErr || userErr) {
      setErr('Invalid inputs');
      return;
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setUser('');
        setPassword('');
        setValidIcon(false);
        navigate('/landing');
      }, 2500);
    }
  }

  function userHandle(e) {
    const value = e.target.value;
    setPassword(value);
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    setUserErr(false);

    const hasLowercase = lowercaseRegex.test(value);
    const hasUppercase = uppercaseRegex.test(value);
    const hasSpecialCharacter = specialCharacterRegex.test(value);

    setUserErr(!(hasLowercase && hasUppercase && hasSpecialCharacter && value.length >= 8));
  }

  function mailHandle(e) {
    const value = e.target.value;
    setUser(value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setMailErr(false);

    if (!emailRegex.test(value)) {
      setMailErr(true);
    } else {
      setMailErr(false);
    }

    setValidIcon(emailRegex.test(value));
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Paper elevation={6} className='login-container'>

      <form className='form-container' onSubmit={loginHandle}>
      <header className='header'>
        <h1>Login Page</h1>
      </header>
        <div className='container'>
          <div className='form-field'>
            <TextField
              className='TextField'
              id='email'
              label='Enter Email'
              variant='standard'
              onChange={mailHandle}
              value={user}
              error={mailErr}
              helperText={mailErr ? 'Invalid email' : ''}
            />
            <LocalPostOfficeOutlinedIcon id= 'mailIcon' className={validIcon ? 'valid' : ' '} />
          </div>

          <div className='form-field'>
            <TextField
              className='TextField'
              id='standard'
              label='Password'
              variant='standard'
              value={password}
              onChange={userHandle}
              type={showPassword ? 'text' : 'password'}
              error={userErr}
              helperText={userErr ? 'Invalid password' : ''}
            />
            <IconButton
              onClick={togglePasswordVisibility}
              color='primary'
              variant='contained'
              size='small'
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>

          {err && <div className='error-text'>{err}</div>}

          <div className='form-field'>
            <Box sx={{ '& > button': { m: 1 } }}>
              <LoadingButton
                size="small"
                onClick={loginHandle}
                loading={loading}
                loadingIndicator="Logging"
                variant="outlined"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Log In'}
              </LoadingButton>
            </Box>
          </div>
        </div>
        <div>
          New User? <a href=''>Sign Up</a>
        </div>
      </form>
    </Paper>
  );
}

export default Login;





