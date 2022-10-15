// material-ui
import { Stack, useMediaQuery } from '@mui/material';

// project import
import MobileSection from './MobileSection';
import Notification from './Notification';
import Profile from './Profile';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <>
            <Stack sx={{ width: '100%' }} direction="row" justifyContent="end" alignItems="center" spacing={2}>
                {/* <Notification /> */}
                {!matchesXs && <Profile />} {matchesXs && <MobileSection />}
            </Stack>
        </>
    );
};

export default HeaderContent;
