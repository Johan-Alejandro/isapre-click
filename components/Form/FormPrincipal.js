import React from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import styles from './FormPrincipal.module.scss';

const FormPrincipal = () => {
  const schema = yup.object().shape({
    full_name: yup.string().required('Este campo es requerido'),
    age: yup
      .number()
      .typeError('Debe ser un número')
      .min(0, 'Edad no válida')
      .required('La edad es requerida'),
    rut: yup.string().required('El RUT es requerido'),
    email: yup.string().email('Email inválido').required('El email es requerido'),
    phone: yup
      .string()
      .matches(/^\d+$/, 'Solo números')
      .min(9, 'Debe tener 9 dígitos')
      .max(9, 'Debe tener 9 dígitos')
      .required('El número de teléfono es requerido'),
    renta: yup
      .number()
      .typeError('Debe ser un número')
      .required('La renta es requerida'),
    comuna: yup.string().required('La comuna es requerida'),
    prevision: yup.string().required('Este campo es requerido'),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://isapreclick.cl/api-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
  
      const result = await response.json();
      console.log('Respuesta del servidor:', result);
      toast.success('Datos enviados correctamente');
      reset();
    } catch (e) {
      console.error(e);
      toast.error('Error al enviar los datos');
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.modalBox}
    >
      <h3 id='cotizar' className={styles.title}>Formulario de Contacto</h3>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nombres y Apellidos"
            placeholder="Ej: Juan Pérez"
            {...register('full_name')}
            error={!!errors.full_name}
            helperText={errors.full_name?.message}
            sx={{
              '& label.Mui-focused': {
                color: '#24b9cc', // Color del label al enfocar
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#24b9cc', // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Edad"
            placeholder="Ej: 30"
            {...register('age')}
            error={!!errors.age}
            helperText={errors.age?.message}
            sx={{
              '& label.Mui-focused': {
                color: '#24b9cc', // Color del label al enfocar
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#24b9cc', // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="RUT"
            placeholder="Ej: 12.345.678-9"
            {...register('rut')}
            error={!!errors.rut}
            helperText={errors.rut?.message}
            sx={{
              '& label.Mui-focused': {
                color: '#24b9cc', // Color del label al enfocar
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#24b9cc', // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Correo Electrónico"
            placeholder="Ej: nombre@mail.com"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              '& label.Mui-focused': {
                color: '#24b9cc', // Color del label al enfocar
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#24b9cc', // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Teléfono"
            placeholder="Ej: 912345678"
            {...register('phone')}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            sx={{
              '& label.Mui-focused': {
                color: '#24b9cc', // Color del label al enfocar
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#24b9cc', // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Renta Imponible"
            placeholder="Ej: 800000"
            {...register('renta')}
            error={!!errors.renta}
            helperText={errors.renta?.message}
            sx={{
              '& label.Mui-focused': {
                color: '#24b9cc', // Color del label al enfocar
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#24b9cc', // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Comuna"
            placeholder="Ej: Las Condes"
            {...register('comuna')}
            error={!!errors.comuna}
            helperText={errors.comuna?.message}
            sx={{
              '& label.Mui-focused': {
                color: '#24b9cc', // Color del label al enfocar
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#24b9cc', // Borde al enfocar
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Previsión de Salud Actual"
          placeholder="Ej: Fonasa, Isapre Colmena..."
          {...register('prevision')}
          error={!!errors.prevision}
          helperText={errors.prevision?.message}
          sx={{
            '& label.Mui-focused': {
              color: '#24b9cc', // Color del label al enfocar
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#24b9cc', // Borde al enfocar
              },
            },
          }}
        />
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <button type="submit" className={styles.btnHero}>
          Enviar
        </button>
      </Box>
    </Box>
  );
};

export default FormPrincipal;
