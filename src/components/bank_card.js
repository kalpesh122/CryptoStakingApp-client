
import React from 'react';
import './bank_card.css';
import { CardContent, Typography } from '@mui/material';

const BankCardComponent = (title, total_amount, last_digits) => {
    return (
        <React.Fragment>
            <CardContent className='card_content'>
                <Typography color="#ffffff" className='card_text' gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="div" className='card_heading'>
                    {total_amount}
                </Typography>
                <Typography color="#ffffff" className='card_text'>
                    **** {last_digits}
                </Typography>
            </CardContent>
        </React.Fragment>
    )

}

export default BankCardComponent;
