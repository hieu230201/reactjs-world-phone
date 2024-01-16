import React, {useState} from 'react';
import {
    Box,
    Button,
    IconButton,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import Delete from 'mdi-material-ui/Delete';
import Plus from 'mdi-material-ui/Plus'

const ItemRow = ({item, onRemove, onItemChange}) => (
    <>
        <Grid item xs={12} md={3} lg={6}>
            <TextField
                select
                fullWidth
                value={item.name}
                onChange={e => onItemChange(e, item.id, 'name')}
                size="small"
                variant="outlined"
            >
                <MenuItem value="App Design">App Design</MenuItem>
                <MenuItem value="Customization & Bug Fixes">Customization & Bug Fixes</MenuItem>
            </TextField>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
            <TextField
                type="number"
                value={item.cost}
                onChange={e => onItemChange(e, item.id, 'cost')}
                fullWidth
                size="small"
                variant="outlined"
            />
        </Grid>
        <Grid item xs={12} md={3} lg={1}>
            <TextField
                type="number"
                value={item.hours}
                onChange={e => onItemChange(e, item.id, 'hours')}
                fullWidth
                size="small"
                variant="outlined"
            />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
            <TextField
                type="number"
                value={12312}
                onChange={e => onItemChange(e, item.id, 'hours')}
                fullWidth
                size="small"
                variant="outlined"
            />
        </Grid>
        <Grid item xs={12} md={1} lg={1}>
            <IconButton onClick={() => onRemove(item.id)} aria-label="delete">
                <Delete/>
            </IconButton>
        </Grid>
    </>
);

const InvoiceItems = () => {
    const [items, setItems] = useState([
        {id: 1, name: 'App Design', cost: 24, hours: 1},
        {id: 2, name: 'App Design123', cost: 24, hours: 1},
// Add initial items as needed
    ]);

    const handleItemChange = (event, id, field) => {
        const newValue = event.target.value;
        setItems(items.map(item => item.id === id ? {...item, [field]: newValue} : item));
    };

    const handleRemove = (itemId) => {
        setItems(items.filter(item => item.id !== itemId));
    };

    const handleAdd = () => {
        const newItem = {id: Date.now(), name: 'App Design', cost: 0, hours: 0}; // Unique ID with Date.now()
        setItems([...items, newItem]);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <Typography variant="h6" gutterBottom>
                Invoice Items
            </Typography>
            <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} md={3} lg={6}><Typography>Item</Typography></Grid>
                <Grid item xs={12} md={2} lg={2}><Typography>Rom</Typography></Grid>
                <Grid item xs={12} md={3} lg={1}><Typography>Color</Typography></Grid>
                <Grid item xs={12} md={3} lg={2}><Typography>Price</Typography></Grid>
                <Grid item xs={12} md={1} lg={1}><Typography>Action</Typography></Grid>
                {items.map((item, index) => (
                    <ItemRow
                        key={item.id}
                        item={item}
                        onRemove={handleRemove}
                        onItemChange={handleItemChange}
                    />
                ))}
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
                sx={{mt: 2}}
                size={"small"}
            >
                Add Item <Plus/>
            </Button>
        </Box>
    );
};

export default InvoiceItems;