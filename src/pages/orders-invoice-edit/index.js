import Grid from '@mui/material/Grid'
import 'react-datepicker/dist/react-datepicker.css'
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import InvoiceProfile from '../../views/orders-invoice/InvoiceProfileUser'
import InvoiceItemForm from '../../views/orders-invoice/InvoiceItemForm'
import InvoiceComponent from '../../views/orders-invoice/InvoiceComponent'
import InvoiceActions from '../../views/orders-invoice/InvoiceActions'
import InvoiceHeader from '../../views/orders-invoice/InvoiceHeader'

const Invoice = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Paper elevation={0}>
                    <CardContent>
                        <InvoiceHeader/>
                    </CardContent>
                    <Divider/>
                    <CardContent>
                        <InvoiceProfile/>
                    </CardContent>
                    <Divider/>
                    <CardContent>
                        <InvoiceItemForm/>
                    </CardContent>
                    <Divider/>
                    <CardContent>
                        <InvoiceComponent/>
                    </CardContent>
                </Paper>
            </Grid>
            <Grid item xs={3} >
                <Paper elevation={0}>
                    <InvoiceActions/>
                </Paper>
            </Grid>

        </Grid>
    );
};

export default Invoice
