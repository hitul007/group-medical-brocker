// material-ui
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    // const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Mantis" width="100" />
         *
         */
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="151" height="57" viewBox="0 0 201 57" fill="none">
                <path
                    d="M21.0037 0V4.30042L29.3141 9.46316V0H21.0037ZM21.0037 8.69627V19.6378C18.9292 16.7488 15.8113 15.8049 12.9815 15.8049C9.65518 15.7778 6.44853 17.0463 4.03839 19.3427C1.55819 21.7607 0 25.3585 0 29.7232C0 33.7923 1.38608 37.5667 4.03839 40.2795C6.2877 42.6375 9.05872 43.8762 12.8666 43.8762C17.424 43.8762 19.7321 41.6948 21.0037 39.807V42.9923H29.3141V13.8582L21.0037 8.69627ZM19.6207 34.6169C18.3434 35.8398 16.6525 36.535 14.8858 36.5636C13.2627 36.5345 11.7133 35.8794 10.5604 34.7347C9.91743 34.1053 9.4072 33.3529 9.06002 32.5223C8.71283 31.6916 8.53576 30.7995 8.53932 29.899C8.51868 28.9697 8.68724 28.046 9.03472 27.1841C9.38221 26.3222 9.90133 25.5403 10.5604 24.886C11.1396 24.3004 11.8333 23.841 12.598 23.5364C13.3627 23.2318 14.182 23.0887 15.0045 23.1159C15.878 23.0824 16.7483 23.239 17.5554 23.5751C18.3625 23.9112 19.0872 24.4187 19.6795 25.0626C20.9002 26.372 21.5619 28.1072 21.5235 29.8982C21.5416 30.773 21.3822 31.6424 21.0547 32.4536C20.7273 33.2648 20.2388 34.0009 19.6188 34.6173L19.6207 34.6169Z"
                    fill="#0152B7"
                />
                <path
                    d="M36.5811 18.3761V42.9927H44.8903V23.5381L36.5811 18.3761ZM40.9411 16.6888L44.8903 19.1422V16.6888H40.9411ZM40.7371 0.530284C39.7547 0.510642 38.7887 0.784475 37.9623 1.31687C37.1359 1.84927 36.4865 2.61611 36.0969 3.51962C35.7073 4.42314 35.5951 5.42239 35.7748 6.38999C35.9544 7.35759 36.4176 8.2497 37.1054 8.95257C37.7932 9.65545 38.6744 10.1372 39.6366 10.3365C40.5988 10.5358 41.5985 10.4436 42.5082 10.0716C43.4179 9.6996 44.1964 9.06467 44.7444 8.24778C45.2925 7.43089 45.5852 6.46904 45.5853 5.48485C45.5978 4.83907 45.4816 4.19728 45.2436 3.59698C45.0056 2.99668 44.6505 2.44991 44.1991 1.98862C43.7477 1.52734 43.2091 1.16079 42.6147 0.910394C42.0202 0.659998 41.3819 0.530777 40.7371 0.530284Z"
                    fill="#0152B7"
                />
                <path
                    d="M71.491 16.6888V19.7556C70.569 18.3403 68.4879 15.8049 63.8168 15.8049C59.0285 15.8049 56.0255 17.9278 54.4673 19.5793C53.3953 20.7313 52.5388 22.0668 51.9387 23.5223C51.437 24.7205 51.0814 25.9748 50.8795 27.2582C50.7335 28.1908 50.6602 29.1333 50.6602 30.0772C50.6602 34.6177 52.3321 37.8019 54.4131 39.9848C56.7761 42.4028 59.8341 43.7003 63.8176 43.7003C68.5471 43.7003 70.5098 41.4001 71.4918 39.7485V42.7564C71.4918 43.8766 71.433 46.6482 69.8198 48.2409C69.2436 48.7711 68.0296 49.6561 65.6627 49.6561C64.4499 49.6561 63.0677 49.4199 62.0873 48.7711C61.165 48.1727 60.5039 47.2459 60.2375 46.178H51.1772C51.6223 48.8761 52.9889 51.3357 55.0435 53.1366C58.2748 55.9682 62.3719 56.4985 65.7795 56.4985C68.6055 56.4985 73.4537 56.086 76.625 52.6067C79.6281 49.3037 79.8002 45.1167 79.8002 41.4012V16.6888H71.491ZM70.1648 34.6762C68.948 35.8182 67.3304 36.4329 65.6635 36.3866C63.7012 36.3866 62.1426 35.7379 60.9886 34.5011C60.1757 33.6035 59.6169 32.5048 59.3697 31.3185C59.1322 30.2786 59.1453 29.197 59.4081 28.1633C59.6847 26.9318 60.2913 25.7991 61.1626 24.8871C62.4124 23.7625 64.04 23.1516 65.72 23.1768C67.369 23.1684 68.9659 23.7546 70.219 24.8283C70.851 25.4629 71.3502 26.2175 71.6872 27.0479C72.0242 27.8782 72.1924 28.7676 72.1817 29.6639C72.1932 30.5915 72.0208 31.5121 71.6746 32.3725C71.3284 33.2328 70.8153 34.0159 70.1648 34.6762Z"
                    fill="#0152B7"
                />
                <path
                    d="M86.8399 16.6888V42.9927H95.1491V16.6888H86.8399ZM90.992 0.530284C90.0096 0.510642 89.0436 0.784475 88.2172 1.31687C87.3908 1.84927 86.7414 2.61611 86.3518 3.51962C85.9622 4.42314 85.85 5.42239 86.0296 6.38999C86.2093 7.35759 86.6725 8.2497 87.3603 8.95257C88.0481 9.65545 88.9292 10.1372 89.8915 10.3365C90.8537 10.5358 91.8534 10.4436 92.7631 10.0716C93.6728 9.6996 94.4513 9.06467 94.9993 8.24778C95.5473 7.43089 95.8401 6.46904 95.8402 5.48485C95.8526 4.83907 95.7365 4.19728 95.4985 3.59698C95.2605 2.99668 94.9054 2.44991 94.454 1.98862C94.0026 1.52734 93.464 1.16079 92.8696 0.910394C92.2751 0.659998 91.6368 0.530777 90.992 0.530284Z"
                    fill="#0152B7"
                />
                <path
                    d="M121.919 16.6888V19.8156C119.325 16.4537 116.322 15.8049 113.786 15.8049C110.093 15.8049 107.09 17.1024 104.782 19.5205C102.229 22.319 100.845 25.9919 100.916 29.7821C100.916 34.3226 102.474 37.743 105.014 40.3384C107.612 42.9935 110.324 43.8766 113.727 43.8766C115.303 43.9219 116.867 43.5927 118.291 42.9159C119.714 42.2391 120.958 41.2339 121.919 39.9829V56.4954H130.23V16.6888H121.919ZM120.652 34.5589C119.402 35.8293 117.699 36.5505 115.918 36.564C114.26 36.5424 112.672 35.8883 111.478 34.7351C110.186 33.387 109.462 31.592 109.457 29.7232C109.451 28.8363 109.621 27.9571 109.958 27.137C110.295 26.3168 110.792 25.5721 111.419 24.9464C112.624 23.773 114.238 23.1168 115.918 23.1175C116.78 23.1111 117.634 23.2804 118.428 23.6151C119.222 23.9497 119.94 24.4427 120.538 25.0641C121.779 26.3693 122.479 28.0976 122.498 29.8998C122.488 31.6294 121.829 33.2922 120.652 34.5573L120.652 34.5589Z"
                    fill="#0152B7"
                />
                <path
                    d="M145.232 16.6887V8.19751H136.921V16.6887H134.037V23.531H136.921V42.9926H145.232V23.531H150.366V16.6887H145.232Z"
                    fill="#0152B7"
                />
            </svg>
        </>
    );
};

export default Logo;
