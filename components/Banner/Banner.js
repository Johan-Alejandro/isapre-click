import React from 'react';
import Container from '@mui/material/Container';
import Image from 'next/legacy/image';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import styles from './Banner.module.scss';
import { Button } from '@mui/material';

const BannerPanel = ( ) => {

  const matchesMd = useMediaQuery('(min-width:900px)');
  return (
    <React.Fragment>
        <section className={styles.heroBanner}>
          <div className={styles.textBanner}>
            <h1 className={styles.title}> ¿Buscas El Mejor Plan De Isapre?</h1>
            <p className={styles.description}> Te asesoramos gratis y sin compromiso.
            Encuentra el plan ideal para ti y tu familia... </p>
            <p className={styles.description}> Compara, elige y ahorra.
            ¡Cotiza tu plan hoy mismo! </p>
            <Button className={styles.btnClas}>
            COTIZAR PLAN
           </Button>
          </div>
        </section>
    </React.Fragment>
  );
};

export default BannerPanel;
