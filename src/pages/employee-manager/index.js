import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import 'react-datepicker/dist/react-datepicker.css'
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TableStickyHeader from "../../views/tables/TableStickyHeader";
import Button from "@mui/material/Button";
import Plus from 'mdi-material-ui/Plus'
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Divider from '@mui/material/Divider';
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";



const columns = [
    {id: 'name', label: 'Name', minWidth: 170},
    {id: 'code', label: 'ISO\u00a0Code', minWidth: 100},
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: value => value.toLocaleString('en-US')
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: value => value.toLocaleString('en-US')
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: value => value.toFixed(2)
    }
]

function createData(name, code, population, size) {
    const density = population / size

    return {name, code, population, size, density}
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767)
]

const EmployeeManager = () => {
    const [searchText, setSearchText] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Grid container spacing={2} justify="center">
            <Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box>
                        <h2 id="parent-modal-title">Text in a modal</h2>
                        <p id="parent-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                    </Box>
                </Modal>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Search Filter' titleTypographyProps={{variant: 'h6'}}/>
                    <CardContent>
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Select Role</InputLabel>
                                    <Select label='Role'>
                                        <MenuItem value='Admin'>Admin</MenuItem>
                                        <MenuItem value='User'>User</MenuItem>
                                        <MenuItem value='Kho'>Kho</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Select Status</InputLabel>
                                    <Select label='Status'>
                                        <MenuItem value='Active'>Active</MenuItem>
                                        <MenuItem value='Inactive'>Inactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} container justifyContent="flex-end" alignItems="center" spacing={1}>
            <Grid item>
                    <TextField
                        variant='outlined'
                        value={searchText}
                        placeholder="Search User"
                        onChange={(e) => setSearchText(e.target.value)}
                        size="small"
                    />
                </Grid>
                <Grid item>
                    <Button variant='contained' onClick={handleOpen}>
                        Add User <Plus />
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <TableStickyHeader columns={columns} rows={rows} searchText={searchText}/>
            </Grid>

        </Grid>

    )
}

export default EmployeeManager
