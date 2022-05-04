
import React from 'react';
import '../style/stacking_screen.css';
import BankCardComponent from '../components/bank_card/bank_card';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Container, Grid, Card, CardContent, TextField, InputAdornment, Button } from '@mui/material';

const StackingScreen = () => {
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Card className='card'>{BankCardComponent('Multi Coin Wallet', '$250', '9834')}</Card>
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
