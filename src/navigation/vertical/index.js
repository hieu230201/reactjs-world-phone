// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import TabletCellphone from 'mdi-material-ui/TabletCellphone'
import CellphoneSettings from 'mdi-material-ui/CellphoneSettings'
import CashPlus from 'mdi-material-ui/CashPlus'
import CashRemove from 'mdi-material-ui/CashRemove'
import AccountWrench from 'mdi-material-ui/AccountWrench'
import TicketPercent from 'mdi-material-ui/TicketPercent'

const navigation = () => {
    return [
        {
            title: 'Dashboard',
            icon: HomeOutline,
            path: '/'
        },
        {
            title: 'Account Settings',
            icon: AccountCogOutline,
            path: '/account-settings'
        },
        {
            title: 'Employee Manager',
            icon: AccountWrench,
            path: '/employee-manager'
        },
        {
            sectionTitle: 'Products'
        },
        {
            title: 'Product',
            icon: TabletCellphone,
            path: '/products'
        },
        {
            title: 'Attribute Product',
            icon: CellphoneSettings,
            childers: [
                {
                    title: 'Ram',
                    icon: Login,
                    path: '/ram'
                    // openInNewTab: true
                },
                {
                    title: 'Rom',
                    icon: HomeOutline,
                    path: '/rom'
                },
            ]
        },
        // {
        //     title: 'Login',
        //     icon: Login,
        //     path: '/pages/login',
        //     openInNewTab: true
        // },
        // {
        //     title: 'Register',
        //     icon: AccountPlusOutline,
        //     path: '/pages/register',
        //     openInNewTab: true
        // },
        // {
        //     title: 'Error',
        //     icon: AlertCircleOutline,
        //     path: '/pages/error',
        //     openInNewTab: true
        // },
        {
            sectionTitle: 'Orders'
        },
        {
            title: 'Orders',
            icon: CashPlus,
            path: '/orders'
        },
        {
            title: 'Orders Invoice',
            icon: CashRemove,
            path: '/orders-invoice'
        },
        {
            title: 'Typography',
            icon: FormatLetterCase,
            path: '/typography'
        },
        {
            title: 'Icons',
            path: '/icons',
            icon: GoogleCirclesExtended
        },
        {
            title: 'Cards',
            icon: CreditCardOutline,
            path: '/cards'
        },
        {
            title: 'Tables',
            icon: Table,
            path: '/tables'
        },
        {
            icon: CubeOutline,
            title: 'Form Layouts',
            path: '/form-layouts'
        },

        {
            sectionTitle: 'Voucher'
        },
        {
            title: 'Vouchers',
            icon: TicketPercent,
            path: '/vouchers'
        },
    ]
}

export default navigation
