import React, { useState } from 'react'
import FormProvider, { RHFTextField } from '../../components/hook-form'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Eye, EyeSlash } from 'phosphor-react'
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from '@mui/material'

export default function () {

    const [showPassword, setShowPassword] = useState(false)

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().required('Email is required').email('Email must be a valid email address'),
        password: Yup.string().required("Password is required"),
    })

    const defaultValues = {
        firstName: '',
        lastName: '',
        email: 'demo@gmail.com',
        password: 'Demo@123'
    }

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    })


    const { reset, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = methods

    const onSubmit = async (data) => {
        try {
            // submit data to backend
        } catch (error) {
            console.log(error);
            reset()
            setError('afterSubmit', {
                ...error,
                message: error.message,
            })
        }
    }


    return (
        <div>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    {!!errors.afterSubmit && <Alert severity='error' >{errors.afterSubmit.message}</Alert>}

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Stack flex={1}>
                            <RHFTextField name='firstName' label='First Name' />
                        </Stack>
                        <Stack flex={1}>
                            <RHFTextField name='lastName' label='Last Name' />
                        </Stack>
                    </Stack>

                    <RHFTextField name='email' label='Email address' />
                    <RHFTextField
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Eye /> : <EyeSlash />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                    <Button
                        fullWidth
                        color='inherit'
                        size='large'
                        type='submit'
                        variant='contained'
                        sx={{
                            bgcolor: 'text.primary',
                            color: (theme) => theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                            '&:hover': {
                                bgcolor: 'text.primary',
                                color: (theme) => theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                            }
                        }}>
                        Create Account
                    </Button>
                    
                </Stack>
            </FormProvider>
        </div>
    )
}
