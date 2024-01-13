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
import {blue, grey} from "@mui/material/colors";
import TextField from "@mui/material/TextField";

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
const TableStickyHeader = ({columns, rows, searchText}) => {
    // ** States
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [orderBy, setOrderBy] = useState('');
    const [orderDirection, setOrderDirection] = useState('asc');

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

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <StyledTableCell key={column.id} align={column.align} sx={{minWidth: column.minWidth}}
                                                 onClick={() => handleSort(column.id)}>
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedRows(filteredRows).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                                    {columns.map(column => {
                                        const value = row[column.id]

                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
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
