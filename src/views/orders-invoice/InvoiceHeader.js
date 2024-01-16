import React, {forwardRef} from 'react';
import {Box, Grid, TextField, Typography} from '@mui/material';
import DatePickerWrapper from "../../@core/styles/libs/react-datepicker";
import DatePicker from "react-datepicker";
const CustomInput = forwardRef((props, ref) => {
    return <TextField inputRef={ref} size={"small"} fullWidth {...props} />
})

const InvoiceHeader = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} alignItems="flex-end">
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 3 }}>
                    <Typography variant="h6" sx={{ mt: -3, pb: 3 }}>My Company:</Typography>
                    <Typography variant="body2">Office 149, 450 South Brand Brooklyn</Typography>
                    <Typography variant="body2">San Diego County, CA 91905, USA</Typography>
                    <Typography variant="body2">+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 5, mb: 2 }}>
                    <Typography gutterBottom sx={{ mr: 15 }} variant="h6" component="label">
                        Invoice:
                    </Typography>
                    <TextField
                        id="date-issued"
                        variant="outlined"
                        size="small"
                        defaultValue="#4987"
                        disabled={true}
                        sx={{ flexGrow: 1 }}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 5, mb: 2 }}>
                    <Typography gutterBottom sx={{ width: 'auto', mr: 10 }} variant="subtitle1" component="label" color="lightgray">
                        Date Issued:
                    </Typography>
                    <DatePickerWrapper style={{ flexGrow: 1 }}>
                        <DatePicker
                            name="birthDate"
                            showYearDropdown
                            showMonthDropdown
                            id="account-settings-date"
                            customInput={<CustomInput />}
                        />
                    </DatePickerWrapper>
                </
                    Box>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 5, mb: 2 }}>
                    <Typography gutterBottom sx={{ width: 'auto', mr: 15 }} variant="subtitle1" component="label" color="lightgray">
                        Date Due:
                    </Typography>
                    <DatePickerWrapper style={{ flexGrow: 1 }}>
                        <DatePicker
                            name="dueDate"
                            showYearDropdown
                            showMonthDropdown
                            id="account-settings-due-date"
                            customInput={<CustomInput />}
                        />
                    </DatePickerWrapper>
                </Box>
            </Grid>
        </Grid>
    );
};

export default InvoiceHeader;