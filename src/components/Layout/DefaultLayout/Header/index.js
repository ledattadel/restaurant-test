import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Alert from '@/components/Alert/Alert';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/actions/authAction';

// const pages = ['Order', 'Menu', 'Dish', 'Earnings'];
const pages = [
    { name: 'Phân khu', link: 'area' },
    { name: 'Quản lý bàn', link: 'table' },
];
const settings = ['Profile', 'Account', 'Logout'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const { auth, alert } = useSelector((state) => state);

    const location = useLocation();
    const dispatch = useDispatch();

    console.log('pathname', location.pathname.substring(1));

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleSetting = (e, setting) => {
        // setAnchorElUser(null)
        console.log('e:', e);
        console.log('setting:', setting);
        if (setting === 'Logout') {
            dispatch(logout());
        }
        setAnchorElUser(null);
    };

    return (
        <AppBar style={{ background: '#3D405B', zIndex: '9999' }} position="static">
            <Alert></Alert>
            <Toaster
                toastOptions={{
                    className: '',
                    style: {
                        fontSize: 16,
                    },
                }}
            />
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <DinnerDiningIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            P-Menu
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"></Typography>

                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: location.pathname.substring(1) === page.link ? 'red' : 'black',
                                        }}
                                        to={`/${page.link.toLowerCase()}`}
                                    >
                                        {console.log(location.pathname.substring(1) === page.link)}
                                        <Button
                                            style={{
                                                textDecoration: 'none',
                                                color: location.pathname.substring(1) === page.link ? 'red' : 'black',
                                            }}
                                        >
                                            {page.name}
                                        </Button>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <DinnerDiningIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {' '}
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            {' '}
                            P-R
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link
                                style={{
                                    textDecoration: 'none',
                                }}
                                to={`/${page.link}`}
                            >
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: location.pathname.substring(1) === page.link ? '#FFA5A5' : 'white',
                                        display: 'block',
                                    }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <p
                                    style={{
                                        fontSize: '16px',
                                        color: 'white',
                                        marginRight: '10px',
                                    }}
                                >
                                    {/* {aa} */}
                                </p>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting}>
                                    <Button onClick={(e) => handleSetting(e, setting)}> {setting}</Button>
                                    {/* <Typography textAlign="center">{setting}</Typography> */}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
