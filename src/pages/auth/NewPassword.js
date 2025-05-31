import React from 'react'
import { Stack, Typography, Link } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import { Link as RouterLink } from 'react-router-dom'
import NewPasswordForm from '../../sections/auth/NewPasswordForm'

export default function ResetPassword() {
    return (
        <div>
            <Stack spacing={2} sx={{ mb: 5, position: 'reletive' }}>
                <Typography variant='h3' paragraph>
                    Reset Password
                </Typography>
                <Typography sx={{color: 'text.secondary', mb: 5}}>
                    Please set your neew password.
                </Typography>
            </Stack>

                {/* New password form  */}

                <NewPasswordForm />

                <Link component={RouterLink} to='/auth/login' color='inherit' variant='subtitle2' sx={{mt:3, mx: 'auto', alignItems: 'center', display: 'inline-flex'}} >
                    <CaretLeft />
                    Return to signin
                </Link>
        </div>
    )
}
