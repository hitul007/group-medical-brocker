import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party

// project import
import Dot from 'components/@extended/Dot';

function createData(climeNo, name, date, companyName, carbs, action) {
    return { climeNo, name, date, companyName, carbs, action };
}

const rows = [
    createData(105, 'Margie Cunningham', 'Oct 11 2022', 'Digiqt Technolabs', 2, 'View'),
    createData(106, 'Verna Sharp', 'Oct 10 2022', 'Digiqt Technolabs', 1, 'View'),
    createData(107, 'Tyrone Rodriguez', 'Oct 10 2022', 'Digiqt ', 0, 'View'),
    createData(108, 'Roxanne Rivera', 'Oct 10 2022', 'Digiqt Technolabs', 1, 'View'),
    createData(109, 'Omar Glover', 'Oct 10 2022', 'Digiqt ', 1, 'View'),
    createData(110, 'Minnie Garrett', 'Oct 9 2022', 'Digiqt Technolabs', 1, 'View'),
    createData(111, 'Ian Ingram', 'Oct 9 2022', 'Digiqt Technolabs', 0, 'View'),
    createData(112, 'Audrey Fox', 'Oct 9 2022', 'Technolabs', 0, 'View'),
    createData(113, 'Jon Curry', 'Oct 8 2022', 'Technolabs', 2, 'View')
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
        id: 'climeNo',
        align: 'left',
        disablePadding: false,
        label: 'Clime No.'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'Name'
    },
    {
        id: 'date',
        align: 'right',
        disablePadding: false,
        label: 'Date'
    },
    {
        id: 'companyName',
        align: 'right',
        disablePadding: false,
        label: 'Company name'
    },
    {
        id: 'carbs',
        align: 'left',
        disablePadding: false,
        label: 'Status'
    },
    {
        id: 'action',
        align: 'right',
        disablePadding: false,
        label: 'Action'
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

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 0:
            color = 'warning';
            title = 'Pending';
            break;
        case 1:
            color = 'success';
            title = 'Approved';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'primary';
            title = 'None';
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <Dot color={color} />
            <Typography>{title}</Typography>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
    const [order] = useState('asc');
    const [orderBy] = useState('climeNo');
    const [selected] = useState([]);

    const isSelected = (climeNo) => selected.indexOf(climeNo) !== -1;

    return (
        <Box>
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
                                    <TableCell align="center" component="th" id={labelId} scope="row">
                                        {row.climeNo}
                                    </TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell align="center">{row.companyName}</TableCell>
                                    <TableCell align="center">
                                        <OrderStatus status={row.carbs} />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to="/broker-portal/claims/claim-detail">{row.action}</Link>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
