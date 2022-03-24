// assets
import { IconDashboard,IconTypography } from '@tabler/icons';


// constant

const icons = { IconDashboard , IconTypography };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //
const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'companies',
            title: 'Companies ',
            type: 'item',
            url: '/companies',
            icon: icons.IconTypography,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
