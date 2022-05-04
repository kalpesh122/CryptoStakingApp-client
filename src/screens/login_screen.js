import React from 'react'
import "../style/login_screen.css";
import { Grid, Box, TextField, Button, Typography, Link, Alert } from '@mui/material';


const LoginScreen = (props) => {

  const email = props.email;
  const setEmail = props.setEmail;
  const password = props.password;
  const setPassword = props.setPassword;
  const handleLogin = props.handleLogin;
  const emailError = props.emailError;
  const passwordError = props.passwordError;

  return (
    <Box className='box_container'>
      <Box className='box_form'>
        <Grid align='center'>
          <h2>welcome to crypto stacking, lets continue</h2>
        </Grid>
        <TextField className='form-control' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' fullWidth required />
        {emailError !== '' ? <Alert className='errortxt' severity="error">{emailError}</Alert> : ''}
        <TextField className='form-control' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' type='password' fullWidth required />
        {passwordError !== '' ? <Alert className='errortxt' severity="error">{passwordError}</Alert> : ''}
        <Button onClick={handleLogin()} color='primary' variant="contained" className='btn-submit' fullWidth>Sign in</Button>
        <Typography >
          <Link href="/forgot-password" >
            Forgot password ?
          </Link>
        </Typography>
        <Typography> Do you have an account ?
          <Link href='/register'>
            Sign Up
          </Link>
        </Typography>
      </Box >
    </Box>
  )
}

export default LoginScreen
