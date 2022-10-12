import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Button, InputAdornment, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

import { FilterOutlined, SearchOutlined } from '@ant-design/icons';

function createData(no, name, healthId, emailId, contactNo, claims) {
    return { no, name, healthId, emailId, contactNo, claims };
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
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'no',
        align: 'center',
        disablePadding: false,
        label: 'Clime No.'
    },
    {
        id: 'name',
        align: 'center',
        disablePadding: false,
        label: 'Name'
    },
    {
        id: 'healthId',
        align: 'center',
        disablePadding: false,
        label: 'Health Id'
    },
    {
        id: 'emailId',
        align: 'center',
        disablePadding: false,
        label: 'Email Id'
    },
    {
        id: 'contactNo',
        align: 'center',
        disablePadding: false,
        label: 'Contact No'
    },
    {
        id: 'claims',
        align: 'center',
        disablePadding: false,
        label: 'Claims'
    }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function RecentClaims({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ textAlign: 'center' }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

RecentClaims.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE ||============================== //

export default function Employees() {
    const [order] = useState('asc');
    const [orderBy] = useState('climeNo');
    const [selected] = useState([]);

    const isSelected = (climeNo) => selected.indexOf(climeNo) !== -1;

    return (
        <>
            <Stack sx={{ mt: 2, mb: 1 }} direction="row" justifyContent="flex-end" spacing={2}>
                <Button sx={{ maxWidth: '100px' }} variant="outlined" startIcon={<FilterOutlined />}>
                    Filter
                </Button>
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
                    <RecentClaims order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.climeNo);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.climeNo}
                                    selected={isItemSelected}
                                >
                                    <TableCell component="th" id={labelId} scope="row" align="center" sx={{ color: '#919191' }}>
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="center">
                                        <RouterLink to="/companies/employees" style={{ color: '#919191', textDecoration: 'none' }}>
                                            {row.name}
                                        </RouterLink>
                                    </TableCell>
                                    <TableCell sx={{ color: '#919191' }} align="center">
                                        {row.healthId}
                                    </TableCell>
                                    <TableCell sx={{ color: '#919191' }} align="center">
                                        {row.emailId}
                                    </TableCell>
                                    <TableCell sx={{ color: '#919191' }} align="center">
                                        {row.contactNo}
                                    </TableCell>
                                    <TableCell sx={{ color: '#919191' }} align="center">
                                        {row.claims}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
