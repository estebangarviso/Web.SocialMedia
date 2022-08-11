import React from 'react';
import Form from '../Form';
import FormAvatarUpload from '../Form/FormAvatarUpload';
import FormTextField from '../Form/FormTextField';
import FormPassword from '../Form/FormPassword';
import FormButton from '../Form/FormButton';
import { Box, Typography } from '@mui/material';
import schema from './schema';
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../app/routes';

const SignUp = () => {
  const navigate = useNavigate();
  const handleSuccess = () => {
    navigate(AppRoutes.LOGIN);
  };
  return (
    <Form
      serviceCallback={AuthService.register}
      validationSchema={schema}
      defaultValues={{
        avatar: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      onSuccess={handleSuccess}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormAvatarUpload name='avatar' label='Avatar' />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
          <FormTextField name='first_name' type='text' label='First Name' required />
          <FormTextField name='last_name' type='text' label='Last Name' required />
        </Box>
        <FormTextField name='email' type='email' label='Email' required />
        <FormPassword name='password' label='Password' required />
        <FormPassword name='confirm_password' label='Confirm Password' required />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FormButton type='submit' variant='contained' color='success' sx={{ color: 'white' }} animated>
            <Typography variant='button'>Sign Up</Typography>
          </FormButton>
        </Box>
      </Box>
    </Form>
  );
};

export default SignUp;
