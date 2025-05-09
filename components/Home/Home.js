import React, { useState } from "react";
import { Container, TextField } from '@mui/material'
import { Button } from '../Buttons/Button';
import { useRouter } from 'next/router';
import styles from '../Home/Home.module.scss';
import BannerPanel from "../Banner/Banner";
import BrandSlider from "../BrandSlider/BrandSlider";
import AboutUs from "../AboutUs/AboutUs";
import FormPrincipal from "../Form/FormPrincipal";
import Footer from "../Footer/Footer";

const Home = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const codeVerification = process.env.NEXT_PUBLIC_VERIFICATION_CODE;
    if (code === codeVerification) {
      localStorage.setItem('verificationCode', code);
      router.push('/categorias');
    } else {
      setError('El código de verificación es incorrecto. Intenta de nuevo.');
    }
  };

  return (
    <section>
        <BannerPanel/>
        <BrandSlider/>
        <FormPrincipal/>
        <AboutUs/>
        <Footer/>
    </section>
  );
};

export default Home;
