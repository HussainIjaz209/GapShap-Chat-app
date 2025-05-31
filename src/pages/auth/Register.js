import React from 'react'
import { Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import AuthSocial from '../../sections/auth/AuthSocial'
import RegisterForm from '../../sections/auth/RegisterForm'

export default function Login() {
    return (
        <div>
            <Stack spacing={1} sx={{ mb: 5, position: 'relative' }}>
                <Typography variant='h3'>Welcome to GupShup</Typography>
                <Typography variant='h4'>Get Registered</Typography>
                <Stack direction={'row'} spacing={0.5}>
                    <Typography variant='body2' >Already have account?</Typography>
                    <Link to='/auth/login' component={RouterLink} variant='subtitle2'>
                        Login
                    </Link>
                </Stack>

                {/* register Form  */}

                <RegisterForm />

                {/* term and conditions  */}

                <Typography component={'div'} sx={{ color: 'text.secondary', my: 3, typography: 'caption', textAlign: "center" }}>
                    {'By signing up, I agree to'}
                    <Link underline='always' color='text.primary' sx={{cursor:'pointer'}}> Term of services </Link>
                    {' and '}
                    <Link underline='always' color='text.primary' sx={{cursor:'pointer'}}> Privacy Policy </Link>
                </Typography>


                {/* Auth Social  */}

                <AuthSocial />

            </Stack>
        </div>
    )
}
