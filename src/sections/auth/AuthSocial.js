import { Divider, IconButton, Stack } from '@mui/material'
import { GithubLogo, GoogleLogo, TwitterLogo } from 'phosphor-react'
import React from 'react'

export default function AuthSocial() {
  return (
    <div>
      <Divider sx={{my: 2.5, typography: 'overline', color: "text.disabled", '&::before, ::after': {
        borderTop : 'dashed'
      } }}>OR</Divider>

      <Stack direction={'row'} justifyContent={'center'} spacing={2} >
        <IconButton>
            <GoogleLogo color='#DF3E30' />
        </IconButton>
        <IconButton color="inherit" >
            <GithubLogo />
        </IconButton>
        <IconButton>
            <TwitterLogo color='#1C9CEA' />
        </IconButton>
      </Stack>

    </div>
  )
}
