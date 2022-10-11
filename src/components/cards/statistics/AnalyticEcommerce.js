import PropTypes from 'prop-types';

// material-ui
import { Box, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ title, count }) => (
    <MainCard contentSX={{ p: 2.25 }}>
        <Box>
            <Stack spacing={0.5}>
                <Typography variant="h2" color="inherit">
                    {count}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    {title}
                </Typography>
            </Stack>
        </Box>
    </MainCard>
);

AnalyticEcommerce.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.string,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticEcommerce.defaultProps = {
    color: 'primary'
};

export default AnalyticEcommerce;
