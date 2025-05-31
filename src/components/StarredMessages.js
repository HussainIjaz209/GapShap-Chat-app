import React from 'react'
import { Box, IconButton, Typography, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { CaretLeft } from 'phosphor-react'
import { useDispatch } from 'react-redux';
import { updateSidebarType } from '../redux/Slices/App';
import Message from './Conversation/Messeges'

export default function StarredMessages() {

    const theme = useTheme();
    const dispatch = useDispatch()

    return (
        <div>
            <Box sx={{ width: 320, height: "100vh" }}>
                <Stack sx={{ height: "100%" }} >

                    {/* Header */}

                    <Box sx={{
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background,
                    }} >
                        <Stack
                            direction={'row'}
                            sx={{ height: 100, p: 2 }}
                            alignItems={'center'}
                            spacing={3}
                        >
                            <IconButton onClick={() => {
                                dispatch(updateSidebarType({ type: "CONTACT" }))
                            }}>
                                <CaretLeft />
                            </IconButton>
                            <Typography variant='subtitle2'>
                                Starred Messages
                            </Typography>
                        </Stack>
                    </Box>

                    {/* body  */}

                    <Stack
                        sx={{
                            height: "100%",
                            position: "relative",
                            flexGrow: 1,
                            overflowY: "scroll"
                        }}
                        p={3}
                        spacing={3}
                    >
                        <Message />
                    </Stack>

                </Stack>
            </Box>
        </div>
    )
}
