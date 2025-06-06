import React from 'react'
import { Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import AuthSocial from '../../sections/auth/AuthSocial'
import LoginForm from '../../sections/auth/LoginForm'

export default function Login() {
    return (
        <div>
            <Stack spacing={1} sx={{ mb: 5, position: 'relative' }}>
                <Typography variant='h3'>Welcome to GupShup</Typography>
                <Typography variant='h4'>Login</Typography>
                <Stack direction={'row'} spacing={0.5}>
                    <Typography variant='body2' >New User</Typography>
                    <Link to='/auth/register' component={RouterLink} variant='subtitle2'>
                        Create an account
                    </Link>
                </Stack>

                {/* Login Form  */}

                <LoginForm />

                {/* Auth Social  */}
                
                <AuthSocial />

            </Stack>
        </div>
    )
}
