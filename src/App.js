import * as React from 'react';
import Box from '@mui/material/Box';
// import HomeScreen from "./screens/home_screen";
// import LoginScreen from './screens/login_screen';
// import WalletScreen from './screens/wallet_screen';
import DepositScreen from './screens/deposit_screen';
// import StackingScreen from './screens/stacking_screen';
// import WithDrawalScreen from './screens/withdrawal_screen';
import { styled } from '@mui/material/styles';
import { AppBar, Grid, Divider, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import "./style/main.css";
import "./App.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import LayersOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const App = () => {
  const drawerWidth = 240;
  const drawer = (
    <div>
      <Toolbar />
      <Typography variant="h5" component="div" className='drawer_heading'>
          Crypto Wallet
      </Typography>
      <Divider />
      <List>
        {['Home', 'Stacking', 'Deposit', 'WithDrawal', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === 'Home' ? <HomeOutlined /> : text === 'Stacking' ? <LayersOutlinedIcon /> : text === 'Deposit' ? <AddCircleOutline /> : text === 'WithDrawal' ? <AccountBalanceWalletOutlinedIcon /> : text === 'Settings' ? <SettingsOutlinedIcon /> : <SettingsOutlinedIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <ExitToAppOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
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

  return (
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
            <IconButton className="header_button" size="large" edge="start" aria-label="open drawer" sx={{ mr: 2 }} >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1, alignSelf: 'flex-end' }} className='header_text' > Crypto Stacking App </Typography>
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
            <DepositScreen />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
