import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import React from 'react'
import StyledBadge from '../StyleBadge';
import {toggleSidebar} from "../../redux/Slices/App"
import { useDispatch } from 'react-redux';

export default function Header() {

    const theme = useTheme();

    const dispatch = useDispatch()

    return (
        <>
            <Box
                p={2}
                sx={{
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                }}>

                <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'} sx={{ width: "100%", height: "100%" }}>
                    <Stack onClick={() => {
                        dispatch(toggleSidebar())
                    }} 
                    direction={'row'} 
                    spacing={2} 
                    >
                        <Box>
                            <StyledBadge overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt='name' src="https://i.pravatar.cc/300" />
                            </StyledBadge>
                        </Box>
                        <Stack spacing={0.2}>
                            <Typography variant='subtitle2'>Hussain Ijaz</Typography>
                            <Typography variant='caption'>Online</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} spacing={3}>
                        <IconButton>
                            <VideoCamera />
                        </IconButton>
                        <IconButton>
                            <Phone />
                        </IconButton>
                        <IconButton>
                            <MagnifyingGlass />
                        </IconButton>
                        <Divider orientation='vertical' flexItem />
                        <IconButton>
                            <CaretDown />
                        </IconButton>
                    </Stack>
                </Stack>

            </Box>
        </>
    )
}
