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
    TextField,
    Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { SearchOutlined } from '@ant-design/icons';
// project import
import Dot from 'components/@extended/Dot';
import ClaimsFilter from 'components/ClaimsFilter';
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

function createData(climeNo, name, healthid, Climeamount, hosName, date, carbs) {
    return { climeNo, name, healthid, Climeamount, hosName, date, carbs };
}

const rows = [
    createData(1, 'Margie Cunningham', '00-1111-2222-3333', '???10.000', 'Abbotsford Private Hospital', '05/11/2022 to 12/11/2022', 2),
    createData(2, 'Verna Sharp', '00-1111-2222-3333', '???20.000', 'Adelaide Clinic', '05/11/2022 to 12/11/2022', 1),
    createData(3, 'Tyrone Rodriguez', '00-1111-2222-3333', '???30.000 ', 'Adelaide Day Surgery Pty Ltd', '05/11/2022 to 12/11/2022', 0),
    createData(4, 'Roxanne Rivera', '00-1111-2222-3333', '???40.000', 'Barham Hospital', '05/11/2022 to 12/11/2022', 1),
    createData(5, 'Margie Cunningham', '00-1111-2222-3333', '???50.000', 'Baringa Private Hospital', '05/11/2022 to 12/11/2022', 2),
    createData(6, 'Verna Sharp', '00-1111-2222-3333', '???20.000', 'Cloncurry Hospital', '05/11/2022 to 12/11/2022', 1),
    createData(7, 'Tyrone Rodriguez', '00-1111-2222-3333', '???30.000 ', 'Eudunda Hospital', '05/11/2022 to 12/11/2022', 0),
    createData(
        8,
        'Roxanne Rivera',
        '00-1111-2222-3333',
        '???50.000',
        'George Town Hospital and Community Health Centre',
        '05/11/2022 to 12/11/2022',
        1
    ),
    createData(9, 'Margie Cunningham', '00-1111-2222-3333', '???70.000', 'Huon Eldercare', '05/11/2022 to 12/11/2022', 2),
    createData(10, 'Margie Cunningham', '00-1111-2222-3333', '???90.000', 'Kenmore Hospital', '05/11/2022 to 12/11/2022', 2),
    createData(11, 'Margie Cunningham', '00-1111-2222-3333', '???50.000', 'Lameroo District Health Service', '05/11/2022 to 12/11/2022', 2)
].sort((a, b) => (a.healthid < b.healthid ? -1 : 1));

// custom dot
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
//main com==================================================================================
export default function Claims() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                <ClaimsFilter />
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

            <MainCard content>
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
                                <TableCell align="center">Clime No</TableCell>
                                <TableCell align="center">Employee Name</TableCell>
                                <TableCell align="center">Health Id</TableCell>
                                <TableCell align="center">Clime Amount</TableCell>
                                <TableCell align="center">Hospital Name</TableCell>
                                <TableCell align="center">Hospitalized Date</TableCell>
                                <TableCell align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
                                <TableRow key={row.climeNo}>
                                    <TableCell component="th" scope="row" align="center">
                                        {row.climeNo}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to="/broker-portal/claims/claim-detail" style={{ color: '#262626', textDecoration: 'none' }}>
                                            {row.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">{row.healthid}</TableCell>
                                    <TableCell align="center">{row.Climeamount}</TableCell>
                                    <TableCell align="center">{row.hosName}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell align="center">
                                        <OrderStatus status={row.carbs} />
                                    </TableCell>
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
