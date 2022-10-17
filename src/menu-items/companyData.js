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

const companyData = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/company-portal',
            icon: icons.AppstoreOutlined,
            breadcrumbs: false
        },
        {
            id: 'Hospitals',
            title: 'Hospitals',
            type: 'item',
            url: '/company-portal/hospitals',
            icon: icons.MedicineBoxOutlined,
            breadcrumbs: false
        },
        {
            id: 'insurance',
            title: 'Insurance',
            type: 'item',
            url: '/company-portal/insurance',
            icon: icons.SafetyOutlined,
            breadcrumbs: false
        },
        {
            id: 'support',
            title: 'Support',
            type: 'item',
            url: '/company-portal/support',
            icon: icons.UserOutlined,
            breadcrumbs: false
        }
    ]
};

export default companyData;
