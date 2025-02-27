import React, { useState, ReactNode, useEffect } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Settings,
  Search as SearchIcon,
  Bell,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';

const DRAWER_WIDTH = 250;

const StyledAppBar = styled(AppBar)`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300mscubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300mscubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  outline: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  height: 69px;
`;

const StyledToolbar = styled(Toolbar)`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300mscubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300mscubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  height: 100%;
  outline: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`;

const Search = styled.div`
  position: relative;
  padding: 0 8px;
  border-radius: 40px;
  margin-right: 8px;
  width: auto;
  background: #f5f7fa;
  &:hover {
    background-color: white;
  }
`;

const SearchIconWrapper = styled.div`
  padding: 8px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputBase = styled(InputBase)`
  color: inherit;
  padding: 8px;
  & .MuiInputBase-input {
    padding: 8px;
    padding-left: 24px;
    width: 20ch;
    font-size: 15px;
  }
  & .MuiInputBase-input::placeholder {
    color: #8ba3cb;
  }
  @media (max-width: 640px) {
    & .MuiInputBase-input {
      width: 2ch;
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  color: #718ebf;
  background-color: #f5f7fa;
`;


const HeaderText = styled(Typography)`
  font-size: 1.2rem;
  padding-right: 1rem;
  flex-grow: 1;
`
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, pageTitle, setPageTitle } = useAppContext();

  useEffect(() => {
    if (location.pathname === '/') {
      setPageTitle('Overview');
    } else if (location.pathname === '/settings') {
      setPageTitle('Settings');
    }
  }, [location.pathname, setPageTitle]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledAppBar
        position='fixed'
        sx={{
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
        }}
      >
        <StyledToolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <HeaderText variant='h6'>
            {pageTitle}
          </HeaderText>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon size={20} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search for something'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <Tooltip title='Settings'>
              <StyledIconButton
                color='inherit'
                onClick={() => navigate('/settings')}
              >
                <Settings size={20} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title='Notifications'>
              <StyledIconButton color='inherit'>
                <Bell size={20} />
              </StyledIconButton>
            </Tooltip>
            <Tooltip title='Account settings'>
              <IconButton
                onClick={handleMenu}
                size='small'
                aria-controls={anchorEl ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={anchorEl ? 'true' : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80'}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            id='account-menu'
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </StyledAppBar>

      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
          pt: { xs: 8, md: 9 },
          px: { xs: 2, md: 3 },
          pb: 3,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;