import React from 'react';
import "../style/register_screen.css";
import { Grid, Box, Typography, TextField, Button, Alert, Link } from '@mui/material';

const RegisterScreen = (props) => {

  const email = props.email;
  const setEmail = props.setEmail;
  const password = props.password;
  const setPassword = props.setPassword;
  const handleSignUp = props.handleSignUp;
  const emailError = props.emailError;
  const passwordError = props.passwordError;
  return (
    <Box className='box_container'>
      <Box className='box_form'>
        <Grid align='center'>
          <h2>Become a member to crypto stacking</h2>
        </Grid>
        <TextField className='form-control' fullWidth label='Email' placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailError !== '' ? <Alert className='errortxt' severity="error">{emailError}</Alert> : ''}
        <TextField className='form-control' fullWidth label='Password' placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {passwordError !== '' ? <Alert className='errortxt' severity="error">{passwordError}</Alert> : ''}
        <Button onClick={handleSignUp()} variant='contained' color='primary' className='btn-submit' >Sign up</Button>
        <Typography> Do you have an account ?
          <Link href='/login'>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default RegisterScreen;
