import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, Outlet } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HandymanIcon from '@mui/icons-material/Handyman';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useSelector } from 'react-redux';
import { selectData } from '../../../../data/dataSlice';
const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { isAdmin, user } = useSelector(selectData)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const url = '/dashboard'
    const drawer = (
        <div>
            <div className='flex items-center  flex-col'>
                <img className='rounded-full w-1/2' src={user.photoURL} alt="" />
                <h2 className='font-poppins text-lg my-3'>{user.displayName}</h2>
            </div>
            <Box sx={{ display: { xs: 'block', md: 'none' } }} >
                <NavLink style={{ textDecoration: 'none', color: 'gray' }} to="/home"><Button color="inherit">Home</Button></NavLink>
            </Box>
            <Divider />
            <List>
                <Box>

                    <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/makeAdmin`} button >
                        <ListItemIcon>
                            <AdminPanelSettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Add Admin'} />
                    </ListItem>
                    <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/manageAllPost`} button >
                        <ListItemIcon>
                            <ManageSearchIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Manage all Post'} />
                    </ListItem>
                    <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/manageAllRequest`} button >
                        <ListItemIcon>
                            <HandymanIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Manage Request for post'} />
                    </ListItem>
                    <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/addBlog`} button >
                        <ListItemIcon>
                            <RateReviewIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Add Blog'} />
                    </ListItem>
                </Box>
            </List>
            <Divider />
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const navStyle = { backgroundColor: 'white', color: 'black', boxShadow: ' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' }
    return (
        <Box sx={{ display: 'flex', }}>
            <AppBar
                position="fixed"
                style={navStyle}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar >

                    <Typography variant='h5' sx={{ flexGrow: 1 }}><span className='main_title'>Travel</span> Go</Typography>
                    <Typography sx={{ display: { xs: 'none', md: 'block' }, }} >
                        <NavLink style={{ textDecoration: 'none', color: 'gray' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'gray' }} to="/blogs"><Button color="inherit">Blogs</Button></NavLink>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

export default Dashboard;