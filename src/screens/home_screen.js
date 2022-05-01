
import React from 'react';
import '../style/home_screen.css';
import { styled } from '@mui/material/styles';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const HomeScreen = (navigation) => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));
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

    // Card Statistics Design
    const card_statistics = (title, amount, width) => (
        <React.Fragment>
            <CardContent className='card_content'>
                <Typography color="#111" className='card_text' gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="div" className='card_heading'>
                    {amount}
                </Typography>
                <BorderLinearProgress variant="determinate" value={width} />
            </CardContent>
        </React.Fragment>
    );


    // List Item Design
    const list_item = (icon, title, price) => (
        <div className='list_item'>
            <div className='list_avatar'>
                <img src={`../images/ionicons/${icon}.svg`} alt='Deposit' loading="lazy" />
            </div>
            <div className='list_text'>
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </div>
    );


    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Card className='card'>{card}</Card>
                </Grid>
                <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                    <h3>Statistics</h3>
                </Grid>
                <Grid item md={4} lg={4} xl={4} sm={12} xs={12}>
                    <Card className='card_statistics'>{card_statistics('maa token', 15, 15)}</Card>
                </Grid>
                <Grid item md={4} lg={4} xl={4} sm={12} xs={12}>
                    <Card className='card_statistics'>{card_statistics('stacking return', 0.00, 0)}</Card>
                </Grid>
                <Grid item md={4} lg={4} xl={4} sm={12} xs={12}>
                    <Card className='card_statistics'>{card_statistics('level return', 12.00, 12)}</Card>
                </Grid>
                <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                    <h3>History</h3>
                </Grid>
                <Grid item md={4} lg={4} xl={4} sm={12} xs={12}>{list_item('cash', 'Deposit', '$12.00')}</Grid>
                <Grid item md={4} lg={4} xl={4} sm={12} xs={12}>{list_item('cash', 'Withdrawal', '$27.00')}</Grid>
            </Grid>
        </Container>
    );
}

export default HomeScreen;