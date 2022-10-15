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

const EmpData = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/aaaa',
            icon: icons.AppstoreOutlined,
            breadcrumbs: false
        }
    ]
};

export default EmpData;
