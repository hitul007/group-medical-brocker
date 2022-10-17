import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import CompanyRoutes from './CompanyRoutes';
import EmployeeRoutes from './EmployeeRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, EmployeeRoutes, CompanyRoutes, LoginRoutes]);
}
