// assets
import { AppstoreOutlined, ShopOutlined, FileDoneOutlined, MedicineBoxOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    AppstoreOutlined,
    ShopOutlined,
    FileDoneOutlined,
    MedicineBoxOutlined,
    SafetyOutlined,
    UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const EmployeeData = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/employee-portal',
            icon: icons.AppstoreOutlined,
            breadcrumbs: false
        },
        {
            id: 'Hospitals',
            title: 'Hospitals',
            type: 'item',
            url: '/employee-portal/hospitals',
            icon: icons.MedicineBoxOutlined,
            breadcrumbs: false
        },
        {
            id: 'insurance',
            title: 'Insurance',
            type: 'item',
            url: '/employee-portal/insurance',
            icon: icons.SafetyOutlined,
            breadcrumbs: false
        },
        {
            id: 'support',
            title: 'Support',
            type: 'item',
            url: '/employee-portal/support',
            icon: icons.UserOutlined,
            breadcrumbs: false
        }
    ]
};

export default EmployeeData;
