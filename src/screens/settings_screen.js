
import React, { useState } from 'react';
import '../style/settings_screen.css';
import fire from '../fire';
import { styled } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BankCardComponent from '../components/bank_card/bank_card';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Container, Grid, Card, CardContent, TextField, InputAdornment, Button, IconButton, Snackbar, Alert } from '@mui/material';

const SettingsScreen = (user) => {
    //Snackar functions
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);

    //Textfield functions
    const [profileUrl, setProfileUrl] = useState('');
    const [sponsorID, setSponsorID] = useState('');
    const [userName, setUsername] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [sponsorName, setSponsorName] = useState('');

    // Create a root reference
    var storageRef = fire.storage().ref();

    const db = fire.firestore();

    db.collection("users").get().then((querySnapshot) => {
        setEmailAddress(user.user.email);
        querySnapshot.forEach((doc) => {
            if (doc.data().emailAddress === user.user.email) {
                setSponsorID(doc.data().sponsorID);
                setEmailAddress(doc.data().emailAddress);
                setSponsorName(doc.data().sponsorName);
                setUsername(doc.data().userName);
                setProfileUrl(doc.data().profileUrl);

            }
        });
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };

    const Input = styled('input')({
        display: 'none',
    });
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid container rowSpacing={1} item xs={12} md={12} lg={12} xl={12} className='card_profile'>
                    <Grid item xs={6} md={6} lg={6} xl={6}>
                        <Card className='card_avatar'>
                            <img src={profileUrl.length === 0 ? ("https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") : profileUrl} alt='Profile' />
                        </Card>
                        <label htmlFor="icon-button-file" className='upload_button'>
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={
                                (ev) => {
                                    console.log(ev.target.files[0]);
                                    storageRef.child('users/').put(ev.target.value[0].name).then((snapshot) => {
                                        console.log('Uploaded a blob or file!');
                                        var tangRef = storageRef.child('users/' + ev.target.value[0].name);
                                        tangRef.getDownloadURL().then((url) => {
                                            setProfileUrl(url);
                                            db.doc(`users/${user.user.uid}`).update({
                                                profileUrl: url,
                                            }).then((docRef) => {
                                                setOpen(true);
                                            });
                                        });
                                    });
                                }
                            } />
                            <IconButton color="inherit" aria-label="upload picture" component="span" className='upload_icon'>
                                <PhotoCameraOutlinedIcon />
                            </IconButton>
                        </label>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} xl={6}>
                        <Card className='card'>{BankCardComponent('Multi Coin Wallet', '$250', '9834')}</Card>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Card className='card_form'>
                        <CardContent>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <h3>Update Profile</h3>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <TextField fullWidth id="outlined-basic" label="Sponsor Id:" variant="outlined" className='form-control'
                                    value={sponsorID}
                                    onChange={(e) => setSponsorID(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonOutlineRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <TextField fullWidth id="outlined-basic" label="username:" variant="outlined" className='form-control'
                                    value={userName}
                                    onChange={(e) => setUsername(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonOutlineRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <TextField fullWidth id="filled-read-only-input" label="E-mail ID:" variant="outlined" className='form-control' aria-readonly
                                    defaultValue={emailAddress}
                                    value={emailAddress}
                                    InputProps={{
                                        readOnly: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <TextField fullWidth id="outlined-basic" label="Sponsor Name:" variant="outlined" className='form-control'
                                    value={sponsorName}
                                    onChange={(e) => setSponsorName(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonOutlineRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <Button variant="contained" className='btn' onClick={() => {
                                    if ((emailAddress && sponsorName && sponsorID && userName) !== '') {
                                        db.doc(`users/${user.user.uid}`).update({
                                            emailAddress: emailAddress,
                                            sponsorName: sponsorName,
                                            sponsorID: sponsorID,
                                            userName: userName,
                                            date: new Date().getTime(),
                                        }).then((docRef) => {
                                            console.log("Document written with ID: ", docRef.id);
                                            setOpen(true);
                                        }).catch((error) => {
                                            console.error("Error adding document: ", error);
                                        });

                                    } else {
                                        setOpenError(true);
                                    }
                                }}>update</Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Update was successful!!
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError} >
                <Alert onClose={handleCloseError} severity="warning" sx={{ width: '100%' }}>
                    Invalid entry, please try again
                </Alert>
            </Snackbar >
        </Container >
    );
}

export default SettingsScreen;
