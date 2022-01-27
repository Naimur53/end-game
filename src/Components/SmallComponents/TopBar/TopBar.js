import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Container, IconButton } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import './TopBar.css'
import { useSelector } from 'react-redux';
import { selectData } from '../../../data/dataSlice';
import useFirebase from '../../../hooks/useFirebase';
const MainNav = () => {
    const { pathname } = useLocation();

    const { user, isAdmin } = useSelector(selectData);
    const { handleSignOut } = useFirebase();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [colorChange, setColorChange] = useState(true);


    const changeNavbarColor = () => {
        if (pathname === '/addExperience') {
            setColorChange(true)
        }
        else if (pathname === '/home' || pathname === '/' || pathname === '/blogs') {
            if (window.scrollY >= 400) {
                setColorChange(true);
            }
            else {
                setColorChange(false)
            }

        }
        else {
            window.removeEventListener('scroll', changeNavbarColor);
            setColorChange(true)
        }
    };
    useEffect(() => {
        if (pathname === '/addExperience' || pathname === '/login' || pathname === '/signUp') {
            setColorChange(true)
        }
        else { setColorChange(false) }
        window.addEventListener('scroll', changeNavbarColor);
    }, [pathname])
    console.log(colorChange);
    const noActive = { textDecoration: 'none', color: colorChange ? 'gray' : 'white', borderRadius: '0', transition: 'color .3s' }
    const noActive2 = { textDecoration: 'none', color: 'gray', borderRadius: '0', transition: 'color .3s' }
    const activeStyle = { color: colorChange ? 'black' : 'orange' }
    const navStyle = { backgroundColor: colorChange ? 'white' : 'transparent', transition: '.3s', boxShadow: colorChange ? ' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' : 'none' }
    return (
        <AppBar sx={navStyle} position="fixed">
            <Container maxWidth="xl">

                <Toolbar disableGutters>
                    <IconButton
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon sx={{ color: colorChange ? 'gray' : 'white' }} />
                    </IconButton>
                    <Typography variant="h6" component="div" style={noActive} sx={{ flexGrow: 1, color: 'gray', textAlign: { xs: 'center', md: 'left' } }}>
                        <span className='main_title'>TRAVEL</span> GO
                    </Typography>
                    <Box sx={{
                        display: { xs: 'none', md: 'block' },
                    }}>
                        <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/home' >Home</Button>
                        <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/blogs' >Blogs</Button>
                    </Box>

                    {
                        user?.email ?
                            <Box className='flex'>
                                <Box sx={{
                                    display: { xs: 'none', md: 'block' },
                                }}>
                                    <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/addExperience' >Add Experience</Button>
                                    {
                                        isAdmin && <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/dashboard' >Dashboard</Button>
                                    }
                                    <Button style={noActive} onClick={handleSignOut}  >Logout</Button>
                                </Box>
                                <Avatar className='inline-block' alt="user photo" src={user.photoURL} />

                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', }} to="/login">
                                <Button style={noActive}  >Login</Button>
                            </NavLink>

                    }
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
                            display: { xs: 'block', md: 'none' }
                        }}
                    >
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Button component={NavLink} style={noActive2} activeStyle={activeStyle} to='/home' >Home</Button>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Button component={NavLink} style={noActive2} activeStyle={activeStyle} to='/blogs' >Blogs</Button>
                        </MenuItem>
                        {
                            user?.email ?
                                <Box className='flex'>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/addExperience' >Add Experience</Button>
                                        {
                                            isAdmin && <Button component={NavLink} style={noActive2} activeStyle={activeStyle} to='/dashboard' >Dashboard</Button>
                                        }
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Button style={noActive2} onClick={handleSignOut}  >Logout</Button>
                                    </MenuItem>
                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none', }} to="/login">
                                    <Button  >Login</Button>
                                </NavLink>
                        }
                    </Menu>
                </Toolbar>

            </Container>
        </AppBar>
    );
};

export default MainNav;