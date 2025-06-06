import React, { useState } from 'react'
import FormProvider, { RHFTextField } from '../../components/hook-form'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Eye, EyeSlash } from 'phosphor-react'
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'


export default function LoginForm() {

    const [showPassword, setShowPassword] = useState(false)

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email must be a valid email address'),
        password: Yup.string().required("Password is required"),
    })

    const defaultValues = {
        email: '',
        password: ''
    }

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
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

                </Stack>
                <Stack alignItems={'flex-end'} sx={{ my: 2 }}>
                    <Link component={RouterLink} variant='body2' to='/auth/reset-password' color='inherit' underline='always' sx={{ cursor: 'pointer' }}>
                        Forgot Password?
                    </Link>
                </Stack>
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
                    Login
                </Button>
            </FormProvider>
        </div>
    )
}
