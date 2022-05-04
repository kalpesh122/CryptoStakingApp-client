
import React, { useState } from 'react';
import '../style/wallet_screen.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import fire from '../fire';
import BankCardComponent from '../components/bank_card/bank_card';
import { Container, Grid, Card } from '@mui/material';

const WalletScreen = (user) => {
    const [recentDeposits, setRecentDeposits] = useState([]);
    const userEmail = user.user.email;

    const db = fire.firestore();
    let rows = [];

    db.collection("deposits").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().username === userEmail) {
                const properDate = new Date(doc.data().date);
                rows.push({ date: `${properDate.getDate()}/${properDate.getMonth()}/${properDate.getFullYear()} ${properDate.getHours()}:${properDate.getMinutes()}`, username: `${doc.data().username}`, amount: `${doc.data().amount}`, paid: `${doc.data().paid}`, id: `${doc.id}` });
                setRecentDeposits(rows);
            }
        });
    });

    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Card className='card'>{BankCardComponent('Multi Coin Wallet', '$250', '9834')}</Card>
                </Grid>
                <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
                    <h3>Wallet</h3>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <TableContainer component={Paper} className='table'>
                        <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
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
                                {recentDeposits.map((row) => (
                                    <TableRow
                                        key={row.id}
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

            </Grid>
        </Container>);
}

export default WalletScreen;
