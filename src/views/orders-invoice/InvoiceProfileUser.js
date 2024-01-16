import Grid from '@mui/material/Grid'
import 'react-datepicker/dist/react-datepicker.css'
import {useTheme} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {forwardRef} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {OutlinedInput, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

const CustomInput = forwardRef((props, ref) => {
    return <TextField inputRef={ref} size={"small"} fullWidth {...props} />
})

const InvoiceProfile = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ pb: 3 }}>Invoice To:</Typography>
                </Box>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select
                        displayEmpty
                        input={<OutlinedInput />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ mt: 3 }}>
                    <Typography variant="body2">Office 149, 450 South Brand Brooklyn</Typography>
                    <Typography variant="body2">San Diego County, CA 91905, USA</Typography>
                    <Typography variant="body2">+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{display: 'flex', ml: 30, mb: 3}}>
                    <Typography variant="h6" sx={{ pb: 3 }}>Invoice To:</Typography>
                </Box>
                <Box sx={{ mt: 3, ml: 30}}>
                    <Typography variant="body2">Office 149, 450 South Brand Brooklyn</Typography>
                    <Typography variant="body2">San Diego County, CA 91905, USA</Typography>
                    <Typography variant="body2">+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default InvoiceProfile
