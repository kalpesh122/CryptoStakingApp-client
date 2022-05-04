/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../style/metamask_screen.css";
import { ReactComponent as MetaMaskIcon } from '../images/ionicons/Metamask-logo.svg';
import { Navigate } from 'react-router-dom';
import { Box, Grid, Card, CardContent, SvgIcon } from '@mui/material';

// This function will check if the current device is mobile or desktop
function isMobileDevice() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

// This function will check if the user has a metamask account registered on his selected brower
async function checkIfMetaMaskIsConnected(onConnected) {
    if (!window.ethereum) {
        alert("Get MetaMask!");
    } else {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        onConnected(accounts[0]);
    }
}

async function checkIfWalletIsConnected(onConnected) {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if (accounts.length > 0) {
            const account = accounts[0];
            onConnected(account);
            return;
        }

        if (isMobileDevice()) {
            await checkIfMetaMaskIsConnected(onConnected);
        }
    }
}

export default function MetaMaskScreen({ onAddressChanged }) {
    const [userAddress, setUserAddress] = useState("");

    useEffect(() => {
        checkIfWalletIsConnected(setUserAddress);
    }, []);

    useEffect(() => {
        if (typeof onAddressChanged == "function") {
            onAddressChanged(userAddress);
        }
    }, [userAddress]);

    return userAddress ?
        <Navigate to='/home' />
        : (
            <Connect setUserAddress={setUserAddress} />
        );
}

// This function will connect the user to MetaMask
function Connect({ setUserAddress }) {
    if (isMobileDevice()) {
        const dappUrl = "metamask-auth.ilamanov.repl.co";
        const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
        return (
            <Box className='metamask_container'>
                <Card className='metamask_form'>
                    <CardContent>
                        <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                            <h3>Connect to MetaMask Wallet</h3>
                        </Grid>
                        <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                            <SvgIcon component={MetaMaskIcon} inheritViewBox className='img' />
                        </Grid>
                        <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                            <a href={metamaskAppDeepLink}>
                                <button className="connect-btn">Connect to MetaMask</button>
                            </a>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        );
    }

    return (
        <Box className='metamask_container'>
            <Card className='metamask_form'>
                <CardContent>
                    <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                        <h3>Connect to MetaMask Wallet</h3>
                    </Grid>
                    <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                        <SvgIcon component={MetaMaskIcon} inheritViewBox className='img' />
                    </Grid>
                    <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                        <button className="connect-btn" onClick={() => checkIfMetaMaskIsConnected(setUserAddress)}>Connect to MetaMask</button>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}


// // This function will show the users address in text on the window
// function Address({ userAddress }) {
//     return (
//         <span className="address">{userAddress.substring(0, 5)}...{userAddress.substring(userAddress.length - 4)}</span>
//     );
// }
