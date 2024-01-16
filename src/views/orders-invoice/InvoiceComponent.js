import React from 'react';
import {Box, Grid, Paper, TextField, Typography} from '@mui/material';

const InvoiceComponent = () => {
    // State initialization (you can manage the state however you need for your application)
    const [salesperson, setSalesperson] = React.useState('Tommy Shelby');
    const [message, setMessage] = React.useState('Thanks for your business');
    const [subtotal, setSubtotal] = React.useState(1800);
    const [discount, setDiscount] = React.useState(28);
    const [tax, setTax] = React.useState('21%');
    const [total, setTotal] = React.useState(1690);

    return (
        <Paper style={{ padding: 16 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={9}>
                    <Box display="flex" alignItems="center" mb={5}>
                        <Typography variant="body2" component="p" style={{ marginRight: 20, width: '10%' }}>
                            Salesperson:
                        </Typography>
                        <TextField
                            fullWidth
                            value={salesperson}
                            disabled
                            variant="outlined"
                            size="small"
                            style={{ flexBasis: '30%' }}
                        />
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Typography variant="body2" component="p" style={{ marginRight: 20, width: '10%' }}>
                            Note:
                        </Typography>
                        <TextField
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            fullWidth
                            variant="outlined"
                            size="small"
                            style={{ flexBasis: '30%' }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
                        <Typography variant="body2">Subtotal:</Typography>
                        <Typography variant="body2" fontWeight="bold">${subtotal}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
                        <Typography variant="body2">Discount:</Typography>
                        <Typography variant="body2" fontWeight="bold">${discount}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
                        <Typography variant="body2">Tax:</Typography>
                        <Typography variant="body2" fontWeight="bold">{tax}</Typography>
                    </Box>
                    <hr />
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
                        <Typography variant="body2">Total:</Typography>
                        <Typography variant="body2" fontWeight="bold">${total}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default InvoiceComponent;