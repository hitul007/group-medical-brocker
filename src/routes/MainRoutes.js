import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

import Allclaims from 'pages/Claims/Allclaims';
import Companies from 'pages/Companies/Companies';
import Details from 'pages/Companies/Details/Details';
import EmployeesDetails from 'pages/Companies/Details/Employees/EmployeesDetails';
import Hospitals from 'pages/Hospitals/Hospitals';
import Insurance from 'pages/Insurance/Insurance';
import Support from 'pages/Support/Support';
import ClaimDetails from 'pages/Claims/ClaimDetails';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

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
        },
        {
            path: 'claim-detail',
            element: <ClaimDetails />
        }
    ]
};

export default MainRoutes;
