// project import
import EmployeeLayout from 'layout/EmployeeLayout';
import EmpHospitals from 'pages/EmployeePortal/EmpHospitals';
import EmpInsurance from 'pages/EmployeePortal/EmpInsurance';
import EmpClaimDetails from 'pages/EmployeePortal/Employees/EmpClaimDetails';
import EmployeesDetails from 'pages/EmployeePortal/Employees/EmployeesDetails';
import EmpSupport from 'pages/EmployeePortal/EmpSupport';

// ==============================|| MAIN ROUTING ||============================== //

const EmployeeRoutes = {
    path: '/employee-portal',
    element: <EmployeeLayout />,
    children: [
        {
            path: '/employee-portal',
            element: <EmployeesDetails />
        },
        {
            path: 'hospitals',
            element: <EmpHospitals />
        },
        {
            path: 'insurance',
            element: <EmpInsurance />
        },
        {
            path: 'support',
            element: <EmpSupport />
        },
        {
            path: 'claim-detail',
            element: <EmpClaimDetails />
        }
    ]
};

export default EmployeeRoutes;
