"use client";
import  React, { useState } from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

const pages = ['Home', 'Work', 'About','Servicess','Contacts'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClick = (e) => {
    e.preventDefault()
    router.push("/#working")
  }

  const handleClickAbout = (e) => {
    e.preventDefault()
    router.push("/#profile")
  }
  const handleClickServices = (e) => {
    e.preventDefault()
    router.push("/#services")
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='bg-black text-whitw' position='sticky'>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
         {/* <Link href={"/"}>QUERE</Link> */}
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
             <Stack className='text-center p-3'>
             {pages.map((page) => {
               if(page=="Home"){
                return <Link onClick={handleCloseNavMenu} href="/">{page}</Link>
               }else{
                return <Link onClick={handleCloseNavMenu} href={`/${page}`}>{page}</Link>
               }
              })}
             </Stack>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box className='justify-center items-center' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap:'10px' } }}>
            {pages.map((page,index) => {
               if(page=="Home"){
                return (
                 <>
                  <Link  className='hover:border-b-2 hover:border-black' href="/">{page}</Link> <span>/</span>
                 </>
                )
               }
               else if(page=="About"){
                return (
                  <>
                  <a onClick={handleClickAbout}  className='hover:border-b-2 hover:border-black' href="#profile">{page}</a> <span>/</span>
                 </> 
                )
               }
               else if(page=="Work"){
                return (
                  <>
                  <a onClick={handleClick}  className='hover:border-b-2 hover:border-black' href="#working">{page}</a> <span>/</span>
                 </> 
                )
               }
               else if(page=="Servicess"){
                return (
                  <>
                  <a onClick={handleClickServices}  className='hover:border-b-2 hover:border-black' href="#profile">{page}</a> <span>/</span>
                 </> 
                )
               }
               else{
                if(index==pages.length-1){
                  return (
                    <>
                    <Link className='hover:border-b-2 hover:border-black' href={`/${page}`}>{page}</Link>
                   </>
                  )
                }else{
                  return (
                    <>
                    <Link  className='hover:border-b-2 hover:border-black' href={`/${page}`}>{page}</Link> <span>/</span>
                   </>
                  )
                }
               
               }
              })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
