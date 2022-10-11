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

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.AppstoreOutlined,
            breadcrumbs: false
        },
        {
            id: 'companies',
            title: 'Companies',
            type: 'item',
            url: '/companies',
            icon: icons.ShopOutlined,
            breadcrumbs: false
        },
        {
            id: 'claims',
            title: 'Claims',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.FileDoneOutlined,
            breadcrumbs: false
        },
        {
            id: 'Hospitals',
            title: 'Hospitals',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.MedicineBoxOutlined,
            breadcrumbs: false
        },
        {
            id: 'insurance',
            title: 'Insurance',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.SafetyOutlined,
            breadcrumbs: false
        },
        {
            id: 'support',
            title: 'Support',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.UserOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
