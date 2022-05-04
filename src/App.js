import React, { useState, useEffect, Fragment } from 'react';
import Box from '@mui/material/Box';
import MetaMaskScreen from './screens/metamask_screen';
import LoginScreen from './screens/login_screen';
import HomeScreen from "./screens/home_screen";
import WalletScreen from './screens/wallet_screen';
import DepositScreen from './screens/deposit_screen';
import SettingsScreen from './screens/settings_screen';
import RegisterScreen from './screens/register_screen';
import StackingScreen from './screens/stacking_screen';
import WithDrawalScreen from './screens/withdrawal_screen';
import { styled } from '@mui/material/styles';
import { AppBar, Grid, Divider, List, ListItem, ListItemIcon, ListItemText, Drawer, Button } from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import "./style/main.css";
import "./App.css";
import fire from './fire';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import LayersOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const App = () => {
  const [logoutDialog, setlogoutDialog] = React.useState(false);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email, password).catch(err => {
      switch (err.code) {
        case "auth/invalid-email":

          break;
        case "auth/user-disabled":

          break;
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;

        default:
          break;
      }
    });
  }

  const handleSignUp = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      switch (err.code) {
        case "auth/email-already-in-use":

          break;
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;

        default:
          break;
      }
    });
  }

  const handleLogout = () => {
    return (<Dialog
      open={logoutDialog}
      onClose={setlogoutDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={setlogoutDialog(false)}>Disagree</Button>
        <Button onClick={() => { setlogoutDialog(false); fire.auth().signOut(); }} autoFocus> Agree </Button>
      </DialogActions>
    </Dialog>);
  }

  const authListener = () => {
    return fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  }

  const drawerWidth = 320;

  const checkIfWalletIsConnected = () => {
    if (!window.ethereum) {
      return false;
    } else {
      return true;
    };
  };

  useEffect(() => {
    authListener();
  });

  const drawer = (
    <div>
      <Typography variant="h5" component="div" className='drawer_heading'>
        Crypto Wallet
      </Typography>
      <Divider />
      <List>
        {['Home', 'Stacking', 'Deposit', 'WithDrawal', 'Wallet', 'Settings'].map((text, index) => (
          <Link className='aside_button' to={text.toLowerCase()}>
            <ListItem button key={text} className='aside_button_text'>
              <ListItemIcon>
                {text === 'Home' ? <HomeOutlined /> : text === 'Stacking' ? <LayersOutlinedIcon /> : text === 'Deposit' ? <AddCircleOutline /> : text === 'WithDrawal' ? <AccountBalanceWalletOutlinedIcon /> : text === 'Settings' ? <SettingsOutlinedIcon /> : <ContactMailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText className='aside_text' primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text, index) => (
          <Link className='aside_button' to='' onClick={() => { setlogoutDialog(true); handleLogout(); }}>
            <ListItem className='aside_button_text' button key={text}>
              <ListItemIcon>
                <ExitToAppOutlinedIcon />
              </ListItemIcon>
              <ListItemText className='aside_text' primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div >
  );

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    boxShadow: 'none',
    background: '#ffffff',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 128,
    },
  }));

  console.log(user);
  return (
    <Box>
      {user !== '' ? (
        <Router>{
          checkIfWalletIsConnected ? (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                minHeight: '95vh',
                backgroundColor: '#fffff',
              }}
            >
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                  },
                }}
                variant="permanent"
                anchor="left"
              >{drawer}</Drawer>
              <Box
                component="main"
                sx={{ marginLeft: `${drawerWidth}px`, flexGrow: 1, bgcolor: 'background.default', p: 3 }}
              ><AppBar elevation={0} position="static">
                  <StyledToolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1, alignSelf: 'flex-start' }} className='header_text' > Crypto Stacking App </Typography>
                    <IconButton className="header_button" size="large" aria-label="search" >
                      <SearchIcon />
                    </IconButton>
                    <IconButton className="header_button" size="large" aria-label="display more actions" edge="end"  >
                      <MoreIcon />
                    </IconButton>
                  </StyledToolbar>
                </AppBar>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Fragment>
                      <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route exact path="/home" element={<HomeScreen />} />
                        <Route exact path="/wallet" element={<WalletScreen />} />
                        <Route exact path="/deposit" element={<DepositScreen user={user} />} />
                        <Route exact path="/stacking" element={<StackingScreen />} />
                        <Route exact path="/settings" element={<SettingsScreen />} />
                        <Route exact path="/withdrawal" element={<WithDrawalScreen />} />
                      </Routes>
                    </Fragment>
                  </Grid>
                </Grid>
              </Box>
            </Box>) : (
            <Fragment>
              <Routes>
                <Route exact path="/" element={<MetaMaskScreen />} />
                <Route exact path="/home" element={<MetaMaskScreen />} />
                <Route exact path="/connnect" element={<MetaMaskScreen />} />
              </Routes>
            </Fragment>)}
        </Router>) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            minHeight: '95vh',
            backgroundColor: '#fffff',
          }}
        >
          <Router>
            <Fragment>
              <Routes>
                <Route exact path="/" element={
                  <LoginScreen
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    emailError={emailError}
                    passwordError={passwordError} />} />
                <Route exact path="/login" element={
                  <LoginScreen
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    emailError={emailError}
                    passwordError={passwordError} />} />
                <Route exact path="/register" element={
                  <RegisterScreen
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSignUp={handleSignUp}
                    emailError={emailError}
                    passwordError={passwordError} />} />
              </Routes>
            </Fragment>
          </Router>
        </Box>)}
    </Box >
  );
}

export default App;
