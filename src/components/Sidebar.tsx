import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
  ListItemButton,
  Typography,
} from '@mui/material';
import { Octagon, LucideProps, Menu } from 'lucide-react';
import Home from '../assets/icons/home.svg';
import SoarLogo from '../assets/icons/soar-task.svg';
import Transaction from '../assets/icons/transaction.svg';
import User from '../assets/icons/user.svg';
import Investments from '../assets/icons/investment.svg';
import CreditCard from '../assets/icons/credit-card.svg';
import Loan from '../assets/icons/loan.svg';
import Services from '../assets/icons/service.svg';
import Priveleges from '../assets/icons/econometrics.svg';
import Settings from '../assets/icons/settings.svg';
import { renderToStaticMarkup } from 'react-dom/server';
import { Attributes, createElement, FunctionComponent } from 'react';

const reactSvgComponentToMarkupString = (
  Component: FunctionComponent,
  props?: Attributes | LucideProps
) =>
  `data:image/svg+xml,${encodeURIComponent(
    renderToStaticMarkup(createElement(Component, props))
  )}`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 32px;
  justify-content: space-between;
  @media (max-width: 640px) {
    font-size: 1rem;
    width: 100%;
    padding: 12px
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
`;

const LogoText = styled.span`
  color: #343c6a;
  font-weight: 800;
  font-size: 1.5rem;
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const StyledListItem = styled(ListItemButton)<{ active?: string }>`
  padding: 8px 32px;
  // border-radius: 8px;
  background-color: ${({ active }) =>
    active === 'true' ? '#E3F2FD' : 'transparent'};
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  box-sizing: content-box;
  ${({ active }) =>
    active === 'true' &&
    css`
      &::before {
        content: url(${reactSvgComponentToMarkupString(Octagon, {
          strokeWidth: 3,
          size: 48,
        })});
        position: absolute;
        left: -42px;
        top: 0px;
      }
    `}
`;

const Icon = styled.img<{ active?: string }>`
  height: 1.125rem;
  ${({ active }) =>
    active === 'false' &&
    css`
      filter: contrast(0);
    `}
`;

const LogoIcon = styled.img<{ active?: string }>`
  height: 2rem;
  ${({ active }) =>
    active === 'false' &&
    css`
      filter: contrast(0);
    `}
`;

const StyledListItemText = styled(Typography)<{ active?: string }>`
  font-weight: ${({ active }) => (active === 'true' ? 'bold' : 'normal')};
  font-size: 18px;
`;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const DRAWER_WIDTH = 250;

const menuItems = [
  { text: 'Dashboard', icon: Home, path: '/' },
  { text: 'Transactions', icon: Transaction, path: '/transactions' },
  { text: 'Accounts', icon: User, path: '/accounts' },
  { text: 'Investments', icon: Investments, path: '/investments' },
  { text: 'Credit Cards', icon: CreditCard, path: '/credit-cards' },
  { text: 'Loans', icon: Loan, path: '/loans' },
  { text: 'Services', icon: Services, path: '/services' },
  { text: 'My Priveleges', icon: Priveleges, path: '/priveleges' },
  { text: 'Settings', icon: Settings, path: '/settings' },
];

const Sidebar = ({ mobileOpen, handleDrawerToggle }: SidebarProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    if (!isDesktop) handleDrawerToggle(); // Close drawer on mobile after clicking
  };

  const drawer = (
    <>
      <Box
        sx={{
          height: { xs: 'auto', md: 70 },
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <DrawerHeader>
          <Logo>
            <LogoIcon
              src={SoarLogo}
            />
            <LogoText>Soar Task</LogoText>
          </Logo>
          {!isDesktop && (
            <IconButton onClick={handleDrawerToggle}>
              <Menu />
            </IconButton>
          )}
        </DrawerHeader>
      </Box>
      <List sx={{ mt: 1 }}>
        {menuItems.map((item) => (
          <StyledListItem
            key={item.text}
            active={(location.pathname === item.path).toString()}
            onClick={() => handleNavigation(item.path)}
          >
            <ListItemIcon>
              <Icon
                src={item.icon}
                active={(location.pathname === item.path).toString()}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <StyledListItemText
                  active={(location.pathname === item.path).toString()}
                  children={item.text}
                />
              }
            />
          </StyledListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        // ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            // boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* Desktop drawer */}
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            borderRight: '1px solid rgba(0, 0, 0, 0.06)',
            height: '100%',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
