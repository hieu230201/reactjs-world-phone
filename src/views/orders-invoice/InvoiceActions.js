import React from 'react';
import {Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch} from '@mui/material';
import CardContent from "@mui/material/CardContent";

const InvoiceActions = () => {
    const [paymentMethod, setPaymentMethod] = React.useState('Internet Banking');
    const [paymentTerms, setPaymentTerms] = React.useState(true);
    const [clientNotes, setClientNotes] = React.useState(false);
    const [paymentStub, setPaymentStub] = React.useState(false);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <CardContent>
            <Grid container spacing={2} padding={5}>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Send Invoice
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        style={{ marginTop: 20 }}
                    >
                        Preview
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        style={{ marginTop: 20 }}
                    >
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        fullWidth
                        style={{ marginTop: 20 }}
                    >
                        Add Payment
                    </Button>
                </Grid>
                <Grid item xs={12}   style={{ marginTop: 20 }}>
                    <FormControl fullWidth>
                        <InputLabel id="payment-select-label">Accept payments via</InputLabel>
                        <Select
                            labelId="payment-select-label"
                            id="payment-select"
                            value={paymentMethod}
                            label="Accept payments via"
                            onChange={handlePaymentMethodChange}
                        >
                            <MenuItem value="Internet Banking">Internet Banking</MenuItem>
                            {/* Add other payment methods as MenuItem components here */}
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={<Switch checked={paymentTerms} onChange={(e) => setPaymentTerms(e.target.checked)} />}
                        label="Payment Terms"
                        style={{ marginTop: 8 }}
                    />
                    <FormControlLabel
                        control={<Switch checked={clientNotes} onChange={(e) => setClientNotes(e.target.checked)} />}
                        label="Client Notes"
                        style={{ marginTop: 8 }}
                    />
                    <FormControlLabel
                        control={<Switch checked={paymentStub} onChange={(e) => setPaymentStub(e.target.checked)} />}
                        label="Payment Stub"
                        style={{ marginTop: 8 }}
                    />
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default InvoiceActions;