
import React, { useState } from 'react';
import '../style/deposit_screen.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import fire from '../fire';
import BankCardComponent from '../components/bank_card/bank_card';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Container, Grid, Card, CardContent, TextField, InputAdornment, Button, Snackbar, Alert, Link } from '@mui/material';

const DepositScreen = (user) => {
    const [amountDeposit, setAmountDeposit] = useState(1);
    const [open, setOpen] = useState(false);
    const userPops = user.user.email;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const db = fire.firestore();
    let rows= [];


    db.collection("deposits").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // dd.push({ date: `${doc.data().date}`, username: `${doc.data().username}`, amount: `${doc.data().amount}`, paid: `${doc.data().paid}`, id: `${doc.id}` });
            rows.push(createData(`${doc.data().date}`, `${doc.data().username}`, `${doc.data().amount}`, `${doc.data().paid}`, `${doc.id}`));
        });
        console.log(rows);
    });

    function createData(date, username, amount, paid, id) {
        return { date, username, amount, paid, id };
    }

    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
                    <h3>Deposit Funds</h3>
                    <Card className='card_form'>
                        <CardContent>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <TextField fullWidth id="outlined-basic" label="Enter Amount (MAA)" variant="outlined" className='form-control'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MonetizationOnOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={amountDeposit}
                                    onChange={(e) => setAmountDeposit(e.target.value)} />
                            </Grid>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <Button variant="contained" className='btn' onClick={() => {
                                    if (amountDeposit > 0) {
                                        db.collection("deposits").add({
                                            amount: amountDeposit,
                                            paid: amountDeposit,
                                            username: userPops,
                                            date: new Date().getSeconds(),
                                        }).then((docRef) => {
                                            console.log("Document written with ID: ", docRef.id);
                                        }).then(() => setAmountDeposit(1)).catch((error) => {
                                            console.error("Error adding document: ", error);
                                        });

                                    } else {
                                        setOpen(true);
                                    }
                                }}>Pay Now</Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6} lg={6} xl={6} sm={12} xs={12}>
                    <h3>steps to follow</h3>
                    <Card className='card_form'>
                        <CardContent>
                            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                                <ul>
                                    <li>Simply open any BSC based DAPP (BSC wallet, trust wallet like any DAPP) or DAPP extension</li>
                                    <li>Login DAPP or extension</li>
                                    <li>Click on “Browser” option put <Link to='https://maastacking.com'>https://maastacking.com</Link></li>
                                    <li>Login your Bharatma Coin member id Click on “Add Fund “</li>
                                    <li>Add fund as you wish and click on pay now</li>
                                </ul>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <TableContainer component={Paper} className='table'>
                        <Table sx={{ minWidth: '100%' }} size="large" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='tableHeader'>#</TableCell>
                                    <TableCell className='tableHeader'>date</TableCell>
                                    <TableCell className='tableHeader'>user address</TableCell>
                                    <TableCell className='tableHeader'>amount</TableCell>
                                    <TableCell className='tableHeader'>paid</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.date}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell className='tableRow'>{row.id}</TableCell>
                                        <TableCell className='tableRow'>{row.date}</TableCell>
                                        <TableCell className='tableRow'>{row.username}</TableCell>
                                        <TableCell className='tableRow'>{row.amount}</TableCell>
                                        <TableCell className='tableRow'>{row.paid}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Card className='card'>{BankCardComponent('Multi Coin Wallet', '$250', '9834')}</Card>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar >
        </Container>
    );
}

export default DepositScreen;
