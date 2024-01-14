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
import {useEffect, useState} from "react";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import AddOrUpdateUser from '../../views/employee-manager/AddOrUpdateUser'


const columns = [
    {id: 'id', label: 'Id', minWidth: 170, display: true},
    {id: 'userName', label: 'Username', minWidth: 170},
    {id: 'fullName', label: 'Full Name', minWidth: 170},
    {id: 'email', label: 'Email', minWidth: 100},
    {id: 'status', label: 'Status', minWidth: 100},
    {id: 'role', label: 'Role', minWidth: 100},
    {id: 'action', label: 'Action', minWidth: 100},
    // {
    //     id: 'size',
    //     label: 'Size\u00a0(km\u00b2)',
    //     minWidth: 170,
    //     align: 'right',
    //     format: value => value.toLocaleString('en-US')
    // },
    // {
    //     id: 'density',
    //     label: 'Density',
    //     minWidth: 170,
    //     align: 'right',
    //     format: value => value.toFixed(2)
    // }
]

function createData(id, userName, population, size, fullName, email, role, status) {

    return {id, userName, fullName, email, role, status}
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263, 'hi', 'hihih', 'admin', 'active'),
    createData('China', 'CN', 1403500365, 9596961, 'hi', 'hihih', 'user', 'Inactive'),
    createData('Italy', 'IT', 60483973, 301340, 'hi', 'hihih', 'kho', 'active'),
]

const EmployeeManager = () => {
    const [searchText, setSearchText] = useState('');
    const [title, setTitle] = useState('');
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (title === 'Add User' || title === 'Edit User') {
            setOpen(true);
            setTitle('')
        }
    }, [title]);

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
                    <AddOrUpdateUser titleModal={title} handleClose={handleClose}/>
                </Modal>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Search Filter'/>
                    <CardContent>
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={6} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Select Role</InputLabel>
                                    <Select label='Role'>
                                        <MenuItem value='Admin'>Admin</MenuItem>
                                        <MenuItem value='User'>User</MenuItem>
                                        <MenuItem value='Kho'>Kho</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6}>
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
                    <Button variant='contained' onClick={() => setTitle('Add User')}>
                        Add User <Plus/>
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <TableStickyHeader columns={columns} rows={rows} searchText={searchText} setTitle={setTitle}/>
            </Grid>

        </Grid>

    )
}

export default EmployeeManager
