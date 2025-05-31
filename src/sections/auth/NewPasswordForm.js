import React, { useState } from 'react'
import FormProvider, { RHFTextField } from '../../components/hook-form'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Eye, EyeSlash } from 'phosphor-react'
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'


export default function NewPasswordForm() {

    const [showPassword, setShowPassword] = useState(false)

    const ewPasswordSchema = Yup.object().shape({
        newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required("New Password is required"),
        confirmPassword: Yup.string().required("Password is required").oneOf([Yup.ref('newPassword'), null], 'Password must match'),
    })

    const defaultValues = {
        password: '',
        newPassword: '',
    }

    const methods = useForm({
        resolver: yupResolver(ewPasswordSchema),
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

                    <RHFTextField
                        name='newPassword'
                        label='New Password' InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Eye /> : <EyeSlash />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }} />
                        
                    <RHFTextField
                        name="confirmPassword"
                        label="Confirm Password"
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
                        Submit
                    </Button>
                </Stack>

            </FormProvider>
        </div>
    )
}
