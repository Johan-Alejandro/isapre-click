import React from 'react';
import styles from './BrandSlider.module.scss';
import SliderTour from '../Sliders/SliderTour';



const BrandSlider = () => {
  return (
    <section id='nuestros-aliados' className={styles.cont}>
      <h1 className={styles.title}>Nuestros Aliados </h1>
      <SliderTour/>
    </section>
  );
};

export default BrandSlider;