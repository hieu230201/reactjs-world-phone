// ** Next Imports
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useState} from "react"
import MenuRight from 'mdi-material-ui/MenuRight' // Import icon từ thư viện MUI

// ** MUI Imports
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import {styled} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'

// ** Configs Import
import themeConfig from 'src/configs/themeConfig'

// ** Custom Components Imports
import UserIcon from 'src/layouts/components/UserIcon'

// ** Utils
import {handleURLQueries} from 'src/@core/layouts/utils'

// ** Styled Components
const MenuNavLink = styled(ListItemButton)(({theme}) => ({
    width: '100%',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    color: theme.palette.text.primary,
    padding: theme.spacing(2.25, 3.5),
    transition: 'opacity .25s ease-in-out',
    '&.active, &.active:hover': {
        boxShadow: theme.shadows[3],
        backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`
    },
    '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
        color: `${theme.palette.common.white} !important`
    }
}))

const MenuItemTextMetaWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'opacity .25s ease-in-out',
    ...(themeConfig.menuTextTruncate && {overflow: 'hidden'})
})

const VerticalNavLink = ({item, navVisible, toggleNavVisibility}) => {
    // ** Hooks
    const [isOpen, setIsOpen] = useState(false);
    const [pathText, setPathText] = useState('/');
    const router = useRouter()
    const isNavLinkActive = (text) => {
        debugger
        if (router.pathname === text || handleURLQueries(router, text)) {
            return true
        } else {
            return false
        }
    }

    const toggleChildMenu = (e) => {
        debugger
        e.preventDefault();
        if (item.childers) {
            setIsOpen(!isOpen);
        }
    };

    const handleNavLinkClick = (e, path) => {
        if (path === undefined) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (navVisible) {
            toggleNavVisibility();
        }
        if (item.childers) {
            setIsOpen(!isOpen);
        }
    };


    const renderNavLink = (navItem, isChild = false) => (
        <Link passHref href={navItem.path === undefined ? '/' : navItem.path}>
            <MenuNavLink
                component={'a'}
                className={isNavLinkActive(navItem.path) ? 'active' : ''}
                {...(navItem.openInNewTab ? {target: '_blank'} : null)}
                onClick={(e) => handleNavLinkClick(e, navItem.path)}
                sx={{
                    pl: isChild ? 3.5 : 3.5,
                    ...(navItem.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
                    display: 'flex', // Đảm bảo các thành phần được sắp xếp theo hàng ngang
                    justifyContent: 'space-between', // Căn chỉnh khoảng cách giữa các thành phần
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemIcon
                        sx={{
                            mr: 2.5,
                            color: 'text.primary',
                            transition: 'margin .25s ease-in-out'
                        }}
                    >
                        <UserIcon icon={navItem.icon}/>
                    </ListItemIcon>
                    <MenuItemTextMetaWrapper>
                        <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>{navItem.title}</Typography>
                    </MenuItemTextMetaWrapper>
                </Box>
                {isChild && navItem.childers && (
                    <MenuRight sx={{ fontSize: 'small' }} /> // Thêm icon mũi tên
                )}
            </MenuNavLink>
        </Link>
    );

    return (
        <React.Fragment>
            <ListItem
                disablePadding
                className='nav-link'
                disabled={item.disabled || false}
                sx={{mt: 1.5, px: '0 !important'}}
                onClick={toggleChildMenu}
            >
                {item.childers === undefined ? renderNavLink(item) : renderNavLink(item, true)}
            </ListItem>
            {item.childers && isOpen && (
                <Box sx={{pl: 4}}>
                    {item.childers.map((child, index) => (
                        <ListItem
                            className='nav-link'
                            key={index}
                            disablePadding
                            disabled={child.disabled || false}
                            sx={{mt: 1.5, px: '0 !important'}}
                        >
                            {renderNavLink(child, true)}
                        </ListItem>
                    ))}
                </Box>
            )}
        </React.Fragment>
    )
}

export default VerticalNavLink
