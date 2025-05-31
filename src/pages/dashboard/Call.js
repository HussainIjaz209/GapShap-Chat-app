import React, { useState } from 'react'
import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Search from '../../components/search/Search'
import SearchIconWrapper from '../../components/search/SearchIconWrapper'
import StyledInputBase from '../../components/search/StyleBaseInput'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import { CallLogElement } from '../../components/CallElement'
import { CallLogs } from '../../data'
import {StartCall} from '../../sections/main/StartCall'




export default function Call() {

      const theme = useTheme();
      const [openDialog, setOpenDialog] = useState(false)
  
      const handleCloseDialog = () => {
          setOpenDialog(false)
      }


  return (
    <div>
      <Stack direction={'row'} sx={{ width: "100%", }}>
        {/* left  */}

        <Box sx=
          {{
            width: 320,
            height: '100vh',
            backgroundColor: (theme) => theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background,
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25',
          }}>
          <Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
            <Stack >
              <Typography variant='h5'> Groups </Typography>

            </Stack>
            <Stack sx={{ width: '100%' }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color='#709CE6' />
                </SearchIconWrapper>
                <StyledInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
              </Search>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant='subtitle2' component={Link} underline='none' sx={{ cursor: 'pointer' }} >Start conversation</Typography>
              <IconButton onClick={() => {
                setOpenDialog(true)
              }}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />

            <Stack sx={{ flexGrow: 1, overflowY: 'auto', height: '100%', }}>

              <Stack spacing={2.5}>
                {/* Call logs */}
                {
                  CallLogs.map((el) => {
                    return <CallLogElement {...el} />
                  })
                }
              </Stack>

            </Stack>
          </Stack>
        </Box>

        {/* right  */}
      </Stack>
      {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} /> }
    </div>
  )
}
