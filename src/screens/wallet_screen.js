
import React from 'react';
import '../style/wallet_screen.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BankCardComponent from '../components/bank_card/bank_card';
import { Container, Grid, Card } from '@mui/material';

const WalletScreen = () => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('01/05/2022 10:48', 'basic', 6.0, 2.0, 8.0),
        createData('01/05/2022 15:51', 'basic', 12.0, 4.0, 16.0),
    ];

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
                                    <TableCell className='tableHeader'>date</TableCell>
                                    <TableCell className='tableHeader'>account type</TableCell>
                                    <TableCell className='tableHeader'>request amount</TableCell>
                                    <TableCell className='tableHeader'>handling charge</TableCell>
                                    <TableCell className='tableHeader'>payable amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell className='tableRow'>{row.name}</TableCell>
                                        <TableCell className='tableRow'>{row.calories}</TableCell>
                                        <TableCell className='tableRow'>{row.fat}</TableCell>
                                        <TableCell className='tableRow'>{row.carbs}</TableCell>
                                        <TableCell className='tableRow'>{row.protein}</TableCell>
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
