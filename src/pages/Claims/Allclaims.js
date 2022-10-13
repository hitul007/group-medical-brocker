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

import { FilterOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
// third-party

// project import
import Dot from 'components/@extended/Dot';
import MainCard from 'components/MainCard';
import Claimdialog from 'pages/Claims/Claimsdialog';

function createData(climeNo, name, healthid, comname, Climeamount, hosName, date, carbs) {
    return { climeNo, name, healthid, comname, Climeamount, hosName, date, carbs };
}

const rows = [
    createData(105, 'Margie Cunningham', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 2),
    createData(106, 'Verna Sharp', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(107, 'Tyrone Rodriguez', '00-1111-2222-3333', 'Digiqt', '$ 50.000 ', 'XYZ', '05/11/2022 to 12/11/2022', 0),
    createData(108, 'Roxanne Rivera', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(109, 'Margie Cunningham', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 2),
    createData(110, 'Verna Sharp', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(111, 'Tyrone Rodriguez', '00-1111-2222-3333', 'Digiqt', '$ 50.000 ', 'XYZ', '05/11/2022 to 12/11/2022', 0),
    createData(112, 'Roxanne Rivera', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(113, 'Margie Cunningham', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 2),
    createData(114, 'Verna Sharp', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(115, 'Tyrone Rodriguez', '00-1111-2222-3333', 'Digiqt', '$ 50.000 ', 'XYZ', '05/11/2022 to 12/11/2022', 0),
    createData(116, 'Roxanne Rivera', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(117, 'Margie Cunningham', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 2),
    createData(118, 'Verna Sharp', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(119, 'Tyrone Rodriguez', '00-1111-2222-3333', 'Digiqt', '$ 50.000 ', 'XYZ', '05/11/2022 to 12/11/2022', 0),
    createData(120, 'Roxanne Rivera', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(121, 'Margie Cunningham', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 2),
    createData(122, 'Verna Sharp', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(123, 'Tyrone Rodriguez', '00-1111-2222-3333', 'Digiqt', '$ 50.000 ', 'XYZ', '05/11/2022 to 12/11/2022', 0),
    createData(124, 'Roxanne Rivera', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(125, 'Margie Cunningham', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 2),
    createData(126, 'Verna Sharp', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(127, 'Tyrone Rodriguez', '00-1111-2222-3333', 'Digiqt', '$ 50.000 ', 'XYZ', '05/11/2022 to 12/11/2022', 0),
    createData(128, 'Roxanne Rivera', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(129, 'Margie Cunningham', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 2),
    createData(130, 'Verna Sharp', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(131, 'Tyrone Rodriguez', '00-1111-2222-3333', 'Digiqt', '$ 50.000 ', 'XYZ', '05/11/2022 to 12/11/2022', 0),
    createData(132, 'Roxanne Rivera', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(133, 'Margie Cunningham', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 2),
    createData(134, 'Verna Sharp', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1),
    createData(135, 'Tyrone Rodriguez', '00-1111-2222-3333', 'Digiqt', '$ 50.000 ', 'XYZ', '05/11/2022 to 12/11/2022', 0),
    createData(136, 'Roxanne Rivera', '00-1111-2222-3333', 'Digiqt', '$ 50.000', 'XYZ', '05/11/2022 to 12/11/2022', 1)
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
        id: 'healthid',
        align: 'right',
        disablePadding: false,
        label: 'Health Id'
    },
    {
        id: 'comname',
        align: 'right',
        disablePadding: false,
        label: 'Company Name'
    },
    {
        id: 'Climeamount',
        align: 'right',
        disablePadding: false,
        label: 'Clime Amount'
    },
    {
        id: 'date',
        align: 'right',
        disablePadding: false,
        label: 'Hospital Name'
    },
    {
        id: 'date',
        align: 'right',
        disablePadding: false,
        label: 'Hospitalized Date'
    },
    {
        id: 'hosName',
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

export default function Allclaims() {
    const [order] = useState('asc');
    const [orderBy] = useState('climeNo');
    const [selected] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isSelected = (climeNo) => selected.indexOf(climeNo) !== -1;

    const handleClickOpen = () => {
        setIsModalOpen(true);
      };

    return (
        <>
            <Stack sx={{ mt: 2, mb: 3 }} direction="row" justifyContent="space-between" spacing={2}>
                <Typography variant="h3"> Total claims 5000</Typography>
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
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
                <Button variant="outlined" startIcon={<PlusOutlined />} onClick={() => handleClickOpen()}>
                    Add Claims
                </Button>
                <Claimdialog modalOpen={isModalOpen} setModalOpen={setIsModalOpen}></Claimdialog>
                </Stack>
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
                                            {row.name}
                                        </TableCell>
                                        <TableCell sx={{ color: '#919191' }} align="center">
                                            {row.healthid}
                                        </TableCell>
                                        <TableCell sx={{ color: '#919191' }} align="center">
                                            {row.comname}
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
            </MainCard>
        </>
    );
}
