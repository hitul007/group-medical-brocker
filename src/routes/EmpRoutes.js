import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import EmpLayout from 'layout/EmpLayout';

import Companies from 'pages/Companies/Companies';
import Details from 'pages/Companies/Details/Details';
import EmployeesDetails from 'pages/Companies/Details/Employees/EmployeesDetails';
import Allclaims from 'pages/Claims/Allclaims';
import Hospitals from 'pages/Hospitals/Hospitals';
import Insurance from 'pages/Insurance/Insurance';
import Support from 'pages/Support/Support';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

const Claimsdialog = Loadable(lazy(() => import('../pages/Claims/Claimsdialog')));
// ==============================|| MAIN ROUTING ||============================== //

const EmpRoutes = {
    path: '/employee-portal',
    element: <EmpLayout />
    // children: [
    //     {
    //         path: '/',
    //         element: <DashboardDefault />
    //     },
    //     {
    //         path: 'dashboard',
    //         children: [
    //             {
    //                 path: 'default',
    //                 element: <DashboardDefault />
    //             }
    //         ]
    //     },
    //     //new pages routes
    //     {
    //         path: 'companies',
    //         //  element: <Companies />
    //         children: [
    //             {
    //                 path: '',
    //                 element: <Companies />
    //             },
    //             {
    //                 path: 'employees',
    //                 element: <EmployeesDetails />
    //             },
    //             {
    //                 path: 'details',
    //                 element: <Details />
    //             }
    //         ]
    //     },
    //     {
    //         path: 'claim',
    //         element: <Claimsdialog />
    //     },
    //     {
    //         path: 'claims',
    //         element: <Allclaims />
    //     },
    //     {
    //         path: 'hospitals',
    //         element: <Hospitals />
    //     },
    //     {
    //         path: 'insurance',
    //         element: <Insurance />
    //     },
    //     {
    //         path: 'support',
    //         element: <Support />
    //     }
    // ]
};

export default EmpRoutes;
