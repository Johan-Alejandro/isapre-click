import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.ContBenefits}>
      <div className={styles.benefitsGeneral}>
        <h2 className={styles.title}>Sobre Nosotros</h2>
        <Grid container className={styles.benefitsGeneralCont}>
          {/* Texto */}
          <Grid item xs={12} sm={6} className={styles.textContainer}>
            <Box>
              <p className={styles.description}>
                En nuestro equipo, somos un grupo de asesores comerciales especializados en planes de salud a través de las isapres de Chile. Nos apasiona ofrecer un servicio personalizado que se ajusta a las necesidades de cada cliente y beneficiario, garantizando siempre las mejores opciones en cobertura y beneficios.
              </p>
              <p className={styles.description}>
                Nuestra misión es brindar asesoramiento experto y transparente, ayudando a nuestros clientes a tomar decisiones informadas sobre su salud y bienestar. Nos encargamos de cotizar, comparar y recomendar los planes más adecuados, asegurando que cada persona reciba el cuidado y la protección que merece.
              </p>
            </Box>
          </Grid>

          {/* Imagen */}
          <Grid item xs={12} sm={6}>
            <Box className={styles.imageCont}>
              <img
                src="/asesores.jpg"
                alt="asesores salud"
                className={styles.image} // Asegúrate de que en tu CSS la clase .image tenga un 100% de ancho
              />
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default AboutUs;
