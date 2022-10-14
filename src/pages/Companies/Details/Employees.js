import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {
    Box,
    IconButton,
    InputAdornment,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TextField
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { SearchOutlined } from '@ant-design/icons';
// project import
import EmpFilter from 'components/EmpFilter';
import MainCard from 'components/MainCard';
import { Link } from 'react-router-dom';
function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired
};

function createData(no, name, healthid, emailId, contactNo, claims) {
    return { no, name, healthid, emailId, contactNo, claims };
}

const rows = [
    createData(1, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '0'),
    createData(2, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '1'),
    createData(3, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '1'),
    createData(4, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '0'),
    createData(5, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '0'),
    createData(6, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '1'),
    createData(7, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '3'),
    createData(8, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '5'),
    createData(9, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '0'),
    createData(10, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '0'),
    createData(11, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '0'),
    createData(12, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '10'),
    createData(13, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '8'),
    createData(14, 'Ravi Fadadu', '12-3456-7890-1234', 'ravi@digiqt.com', '+91 97123 66941', '3')
].sort((a, b) => (a.healthid < b.healthid ? -1 : 1));

//main com==================================================================================
export default function Employees() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 2, mb: 3 }}>
                <EmpFilter />
                <TextField
                    id="outlined-basic"
                    placeholder="Search name or health Id"
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlined />
                            </InputAdornment>
                        )
                    }}
                    sx={{ maxWidth: '250px' }}
                />
            </Stack>

            <MainCard contentSX={{ p: 1 }}>
                <TableContainer
                    sx={{
                        width: '100%',
                        overflowX: 'auto',
                        position: 'relative',
                        display: 'block',
                        maxWidth: '100%',
                        '& td, & th': { whiteSpace: 'nowrap' }
                    }}
                >
                    <Table
                        aria-labelledby="tableTitle"
                        sx={{
                            '& .MuiTableCell-root:first-child': {
                                pl: 2
                            },
                            '& .MuiTableCell-root:last-child': {
                                pr: 3
                            }
                        }}
                    >
                        <TableHead stickyHeader>
                            <TableRow>
                                <TableCell align="center">No</TableCell>
                                <TableCell align="center">Employee Name</TableCell>
                                <TableCell align="center">Health Id</TableCell>
                                <TableCell align="center">Email Id</TableCell>
                                <TableCell align="center">Contact No.</TableCell>
                                <TableCell align="center">Claims</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
                                <TableRow key={row.no}>
                                    <TableCell component="th" scope="row" align="center">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link style={{ color: '#262626', textDecoration: 'none' }} to="/companies/employees">
                                            {row.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">{row.healthid}</TableCell>
                                    <TableCell align="center">{row.emailId}</TableCell>
                                    <TableCell align="center">{row.contactNo}</TableCell>
                                    <TableCell align="center">{row.claims}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[10, 20, 25, { label: 'All', value: -1 }]}
                                    colSpan={8}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page'
                                        },
                                        native: true
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </MainCard>
        </>
    );
}
