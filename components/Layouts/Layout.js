import { Box } from "@mui/material";
import NavbarComponent from "../NavBar/NavBarComponent";
import styles from './Layout.module.scss'; // Agregar estilos si es necesario
import { React } from 'react';
import Home from "../Home/Home";

export default function Layout({ children }) {
  return (
     <Box className={styles.bodyPage}>
      <NavbarComponent /> 
      <Box className={styles.contentBox}>
        {children}
      </Box>
      {/* <BenefitsPanel className={styles.footer} /> */}
     </Box>
  );
}
