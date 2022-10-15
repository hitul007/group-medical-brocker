import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import CompanyLayout from 'layout/CompanyLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

const Claimsdialog = Loadable(lazy(() => import('../pages/Claims/Claimsdialog')));
// ==============================|| MAIN ROUTING ||============================== //

const CompanyRoutes = {
    path: '/company-portal',
    element: <CompanyLayout />
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

export default CompanyRoutes;
