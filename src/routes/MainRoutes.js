import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

import Companies from 'pages/Companies/Companies';
import Details from 'pages/Companies/Details/Details';
import EmployeesDetails from 'pages/Companies/Details/Employees/EmployeesDetails';
import Allclaims from 'pages/Claims/Allclaims';
import Hospitals from 'pages/Hospitals/Hospitals';
import Insurance from 'pages/Insurance/Insurance';
import Support from 'pages/Support/Support';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const Claimsdialog = Loadable(lazy(() => import('../pages/Claims/Claimsdialog')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/broker-portal',
    element: <MainLayout />,
    children: [
        {
            path: '/broker-portal',
            element: <DashboardDefault />
        },
        //new pages routes
        {
            path: 'companies',
            //  element: <Companies />
            children: [
                {
                    path: '',
                    element: <Companies />
                },
                {
                    path: 'employees',
                    element: <EmployeesDetails />
                },
                {
                    path: 'details',
                    element: <Details />
                }
            ]
        },
        {
            path: 'claim',
            element: <Claimsdialog />
        },
        {
            path: 'claims',
            element: <Allclaims />
        },
        {
            path: 'hospitals',
            element: <Hospitals />
        },
        {
            path: 'insurance',
            element: <Insurance />
        },
        {
            path: 'support',
            element: <Support />
        }
    ]
};

export default MainRoutes;
