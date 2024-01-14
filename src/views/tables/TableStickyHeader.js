// ** React Imports
import {useState} from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell, {tableCellClasses} from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import {styled} from "@mui/material/styles";
import {grey} from "@mui/material/colors";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import PencilOutline from 'mdi-material-ui/PencilOutline'
import Delete from 'mdi-material-ui/Delete'
import SwapHorizontal from 'mdi-material-ui/SwapHorizontal'
import {Modal} from "@mui/material";
import DeleteUser from "../employee-manager/DeleteUser";
import Grid from "@mui/material/Grid";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.white,
        backgroundColor: grey[500]
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}))

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },

    // hide last border
    '&:last-of-type td, &:last-of-type th': {
        border: 0
    }
}))
const TableStickyHeader = ({columns, rows, searchText, setTitle}) => {
    // ** States
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [orderBy, setOrderBy] = useState('');
    const [orderDirection, setOrderDirection] = useState('asc');

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleConfirmOpen = (row) => {
        setSelectedRow(row);
        setConfirmOpen(true);
    };

    const handleConfirmClose = () => {
        setConfirmOpen(false);
    };

    const handleSort = (columnId) => {
        const isAsc = orderBy === columnId && orderDirection === 'asc';
        setOrderDirection(isAsc ? 'desc' : 'asc');
        setOrderBy(columnId);
    };
    // Hàm sắp xếp dữ liệu
    const sortedRows = (data) => {
        if (!orderBy || !data) return data;

        return [...data].sort((a, b) => {
            if (a[orderBy] < b[orderBy]) {
                return orderDirection === 'asc' ? -1 : 1;
            }
            if (a[orderBy] > b[orderBy]) {
                return orderDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
    };

    // Hàm lọc dữ liệu
    const filteredRows = searchText
        ? rows.filter(row => {
            // Tìm kiếm dựa trên tất cả các cột hoặc chỉ một số cột tùy chỉnh
            return columns.some(column => {
                const value = row[column.id].toString().toLowerCase();
                return value.includes(searchText.toLowerCase());
            });
        })
        : rows;

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (rowToDelete) => {
        rows = rows.filter(row => row.id !== rowToDelete.id);
    };


    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <Grid>
                <DeleteUser confirmOpen={confirmOpen} handleConfirmClose={handleConfirmClose} selectedRow={selectedRow} handleDelete={handleConfirmOpen}/>
            </Grid>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <StyledTableRow>
                            {columns.filter(column => (column.display === undefined || column.display === false)).map(column => (
                                <StyledTableCell key={column.id} align={column.align} sx={{minWidth: column.minWidth}}
                                                 onClick={() => handleSort(column.id)}>
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {sortedRows(filteredRows).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <StyledTableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                                    {columns.filter(column => (column.display === undefined || column.display === false)).map(column => {
                                        
                                        const value = row[column.id]
                                        if (column.id === 'status') {
                                            if (value === 'active') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Chip label={value} color="primary" variant="outlined"/>
                                                    </TableCell>
                                                )
                                            }
                                            if (value === 'Inactive') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Chip label={value} color="warning" variant="outlined"/>
                                                    </TableCell>
                                                )
                                            }

                                        }
                                        if (column.id === 'role') {
                                            if (value === 'admin') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Chip label={value} color="primary"/>
                                                    </TableCell>
                                                )
                                            }
                                            if (value === 'user') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Chip label={value} color="secondary"/>
                                                    </TableCell>
                                                )
                                            }
                                            if (value === 'kho') {
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <Chip label={value} color="info"/>
                                                    </TableCell>
                                                )
                                            }
                                        }
                                        if (column.id === 'action') {
                                            return <TableCell>
                                                <IconButton aria-label="more" aria-controls="long-menu"
                                                            aria-haspopup="true" onClick={handleClick}>
                                                    <FontAwesomeIcon icon={faEllipsisV}/>
                                                </IconButton>
                                                <Menu
                                                    id="long-menu"
                                                    anchorEl={anchorEl}
                                                    keepMounted
                                                    open={open}
                                                    onClose={handleClose}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'right',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                >
                                                    <MenuItem onClick={(e) => {
                                                        handleClose();
                                                        setTitle('Edit User');
                                                    }
                                                    }>
                                                        <PencilOutline fontSize="small" style={{marginRight: '10px'}}/>
                                                        Edit User
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose}>
                                                        <SwapHorizontal fontSize="small" style={{marginRight: '10px'}}/>
                                                        Change Status
                                                    </MenuItem>
                                                    <MenuItem onClick={() => {
                                                        handleClose();
                                                        handleConfirmOpen(row);
                                                    }}>
                                                        <Delete fontSize="small" style={{ marginRight: '10px' }}/>
                                                        Delete
                                                    </MenuItem>
                                                </Menu>
                                            </TableCell>
                                        }
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        )
                                    })}
                                </StyledTableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default TableStickyHeader
