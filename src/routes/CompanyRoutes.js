// project import
import CompanyLayout from 'layout/CompanyLayout';
import ComClaimDetails from 'pages/CompanyPortal/ComClaimDetails';
import ComHospitals from 'pages/CompanyPortal/ComHospitals';
import ComInsurance from 'pages/CompanyPortal/ComInsurance';
import CompanyDashboard from 'pages/CompanyPortal/CompanyDashboard';
import ComSupport from 'pages/CompanyPortal/ComSupport';
import ComEmployeesDetails from 'pages/CompanyPortal/Employees/ComEmployeesDetails';

// ==============================|| MAIN ROUTING ||============================== //

const CompanyRoutes = {
    path: '/company-portal',
    element: <CompanyLayout />,
    children: [
        {
            path: '/company-portal',
            element: <CompanyDashboard />
        },
        //new pages routes
        {
            path: 'companies',
            //  element: <Companies />
            children: [
                {
                    path: '',
                    element: <CompanyDashboard />
                },
                {
                    path: 'employees',
                    element: <ComEmployeesDetails />
                },
                {
                    path: 'claim-detail',
                    element: <ComClaimDetails />
                }
            ]
        },
        {
            path: 'hospitals',
            element: <ComHospitals />
        },
        {
            path: 'insurance',
            element: <ComInsurance />
        },
        {
            path: 'support',
            element: <ComSupport />
        }
    ]
};

export default CompanyRoutes;
