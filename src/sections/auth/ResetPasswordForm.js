import React from 'react'
import FormProvider, { RHFTextField } from '../../components/hook-form'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Button, Stack } from '@mui/material'


export default function ResetPasswordForm() {

    const ResetPasswordSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    })

    const defaultValues = {
        email: 'demo@gmail.com',
    }

    const methods = useForm({
        resolver: yupResolver(ResetPasswordSchema),
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
                        Send Request
                    </Button>
                </Stack>
            </FormProvider>
        </div>
    )
}
