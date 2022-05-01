/* eslint-disable no-unused-vars */
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeScreen from '../screens/home_screen';
import StackingScreen from '../screens/stacking_screen';
import DepositScreen from '../screens/deposit_screen';
import WalletScreen from '../screens/wallet_screen';
import SettingsScreen from '../screens/settings_screen';
import { walletOutline, homeOutline, fileTrayStackedOutline, addOutline, settingsOutline } from 'ionicons/icons';

const BottomTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" value="home" icon={<homeOutline />} />
        <BottomNavigationAction label="Stacking" value="stacking" icon={<fileTrayStackedOutline />} />
        <BottomNavigationAction label="Deposit" value="deposit" icon={<addOutline />} />
        <BottomNavigationAction label="Wallet" value="wallet" icon={<walletOutline />} />
        <BottomNavigationAction label="Settings" value="settings" icon={<settingsOutline />} />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomTabs;