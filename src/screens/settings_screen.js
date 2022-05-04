
import React from 'react';
import '../style/settings_screen.css';
import { styled } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BankCardComponent from '../components/bank_card/bank_card';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Container, Grid, Card, CardContent,  TextField, InputAdornment, Button, IconButton } from '@mui/material';

const SettingsScreen = () => {
    const Input = styled('input')({
        display: 'none',
    });
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid container rowSpacing={1} item xs={12} md={12} lg={12} xl={12} className='card_profile'>
                    <Grid item xs={6} md={6} lg={6} xl={6}>
                        <Card className='card_avatar'>
                            <img src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Profile' />
                        </Card>
                        <label htmlFor="icon-button-file" className='upload_button'>
                            <Input accept="image/*" id="icon-button-file" type="file" />
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
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonOutlineRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <TextField fullWidth id="outlined-basic" label="E-mail ID:" variant="outlined" className='form-control'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <TextField fullWidth id="outlined-basic" label="Sponsor Name:" variant="outlined" className='form-control'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonOutlineRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <Button variant="contained" className='btn'>update</Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container >
    );
}

export default SettingsScreen;
