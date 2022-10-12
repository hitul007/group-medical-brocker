import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import {
    Button,
    InputAdornment,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';

import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
// third-party

// project import
import Dot from 'components/@extended/Dot';

function createData(climeNo, healthid, Climeamount, hosName, date, carbs) {
    return { climeNo, healthid, Climeamount, hosName, date, carbs };
}

const rows = [
    createData(105, '00-1111-2222-3333', '$ 50.000', 'ABCD', '05/11/2022 to 12/11/2022', 2),
    createData(106, '00-1111-2222-3333', '$ 50.000', 'ABCD', '05/11/2022 to 12/11/2022', 1),
    createData(107, '00-1111-2222-3333', '$ 50.000 ', 'ABCD', '05/11/2022 to 12/11/2022', 0),
    createData(108, '00-1111-2222-3333', '$ 50.000', 'ABCD', '05/11/2022 to 12/11/2022', 1),
    createData(109, '00-1111-2222-3333', '$ 50.000 ', 'ABCD', '05/11/2022 to 12/11/2022', 1),
    createData(110, '00-1111-2222-3333', '$ 50.000', 'ABCD', '05/11/2022 to 12/11/2022', 1),
    createData(111, '00-1111-2222-3333', '$ 50.000', 'ABCD', '05/11/2022 to 12/11/2022', 0),
    createData(112, '00-1111-2222-3333', '$ 50.000', 'ABCD', '05/11/2022 to 12/11/2022', 0),
    createData(113, '00-1111-2222-3333', '$ 50.000', 'ABCD', '05/11/2022 to 12/11/2022', 2)
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
        id: 'healthid',
        align: 'left',
        disablePadding: true,
        label: 'Health Id'
    },
    {
        id: 'Climeamount',
        align: 'right',
        disablePadding: false,
        label: 'Clime Amount'
    },
    {
        id: 'hosName',
        align: 'right',
        disablePadding: false,
        label: 'Hospital Name'
    },
    {
        id: 'date',
        align: 'right',
        disablePadding: false,
        label: 'Hospitals Date'
    },
    {
        id: 'carbs',
        align: 'left',
        disablePadding: false,
        label: 'Status'
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
            title = 'Open';
            break;
        case 1:
            color = 'success';
            title = 'Passed';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'warning';
            title = 'Open';
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

export default function EmpClaims() {
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
                    placeholder="Search hospital name"
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
                                    <TableCell sx={{ color: '#919191' }} component="th" id={labelId} scope="row" align="center">
                                        {row.climeNo}
                                    </TableCell>
                                    <TableCell sx={{ color: '#919191' }} align="center">
                                        {row.healthid}
                                    </TableCell>
                                    <TableCell sx={{ color: '#919191' }} align="center">
                                        {row.Climeamount}
                                    </TableCell>
                                    <TableCell sx={{ color: '#919191' }} align="center">
                                        {row.hosName}
                                    </TableCell>
                                    <TableCell sx={{ color: '#919191' }} align="center">
                                        {row.date}
                                    </TableCell>
                                    <TableCell sx={{ color: '#919191' }} align="center">
                                        <OrderStatus status={row.carbs} />
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
