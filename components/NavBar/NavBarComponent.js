import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './NavBarComponent.module.scss'; // Importamos el archivo SCSS

const pages = ['Nosotros', 'Nuestros Planes', 'Cotizar', 'Contacto'];

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: 'black',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#24b9cc',
        },
      },
    },
  },
});

const NavbarComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" className={styles.navbar}>
        <Container maxWidth="xl">
          <Toolbar>
            {/* Logo */}
            <img
              className={styles.logo}
              src="/IsapreClick.png"
              alt="Logo Better"
              onClick={() => window.scrollTo(0, 0)}
            />

            {/* Menú en versión móvil */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: '#24b9cc' }}
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
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    component="a"
                    href={`#${page.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={handleCloseNavMenu}
                    className={styles.menuItem}
                    sx={{ backgroundColor: '#24b9cc' }} 
                  >
                    <Typography textAlign="center" sx={{ color: 'white' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Menú en versión escritorio */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={`#${page.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleCloseNavMenu}
                  className={styles.menuButton}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavbarComponent;
