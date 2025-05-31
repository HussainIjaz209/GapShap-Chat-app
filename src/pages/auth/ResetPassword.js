import React from 'react'
import { Stack, Typography, Link } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import { Link as RouterLink } from 'react-router-dom'
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'

export default function ResetPassword() {
    return (
        <div>
            <Stack spacing={2} sx={{ mb: 5, position: 'reletive' }}>
                <Typography variant='h3' paragraph>
                    Forget your Password
                </Typography>
                <Typography sx={{color: 'text.secondary', mb: 5}}>
                    Please enter the email address associated with your account and we will email you a link to reset your password.
                </Typography>

                {/* Reset password form  */}

                <ResetPasswordForm />

                <Link component={RouterLink} to='/auth/login' color='inherit' variant='subtitle2' sx={{mt:3, mx: 'auto', alignItems: 'center', display: 'inline-flex'}} >
                    <CaretLeft />
                    Return to signin
                </Link>

            </Stack>
        </div>
    )
}
