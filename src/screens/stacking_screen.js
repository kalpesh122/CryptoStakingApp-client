
import React from 'react';
import '../style/stacking_screen.css';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Container, Grid, Card, CardContent, Typography, TextField, InputAdornment, Button } from '@mui/material';

const StackingScreen = (navigation) => {
    // Card Content
    const card = (
        <React.Fragment>
            <CardContent className='card_content'>
                <Typography color="#ffffff" className='card_text' gutterBottom>
                    Multi Coin Wallet
                </Typography>
                <Typography variant="h5" component="div" className='card_heading'>
                    $250
                </Typography>
                <Typography color="#ffffff" className='card_text'>
                    **** 9834
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Card className='card'>{card}</Card>
                </Grid>
                <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                    <h3>Investments</h3>
                </Grid>

                <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                    <Card className='card_form'>
                        <CardContent>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <TextField fullWidth id="outlined-basic" label="Investment Amount( MAA )" variant="outlined" className='form-control'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MonetizationOnOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <TextField fullWidth id="outlined-basic" label="Fund Amount( MAA )" variant="outlined" className='form-control'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MonetizationOnOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <Button variant="contained" className='btn'>Submit</Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default StackingScreen;