import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import StyledBadge from './StyleBadge'
import { ArrowElbowDownLeft, ArrowElbowRight, Phone, VideoCamera } from 'phosphor-react'


const CallLogElement = ({ id, online, incoming, missed, name, img }) => {

    const theme = useTheme();

    return (
        <Box key={id} sx={{
            width: "100%",
            borderRadius: "1",
            backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper
        }}
            p={2}
        >
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Stack direction={"row"} spacing={2}>
                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar src={img} alt={name} />
                        </StyledBadge>
                    ) : (
                        <Avatar src={img} alt={name} />

                    )}
                    <Stack spacing={0.3}>
                        <Typography variant='subtitle2' noWrap sx={{ maxWidth: '140px', overflow: 'hidden' }}>{name}</Typography>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            {
                                incoming ? <ArrowElbowDownLeft color={missed ? 'red' : 'green'} /> : <ArrowElbowRight color={missed ? 'red' : 'green'} />
                            }
                            <Typography variant='caption'>Yesterday 21:23</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <IconButton>
                    <Phone color='green' />
                </IconButton>
            </Stack>
        </Box>
    )
}

const CallElement = ({ id, online, name, img }) => {

    const theme = useTheme();

    return (
        <Box key={id} sx={{
            width: "100%",
            borderRadius: "1",
            backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper
        }}
            p={2}
        >
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Stack direction={"row"} spacing={2}>
                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar src={img} alt={name} />
                        </StyledBadge>
                    ) : (
                        <Avatar src={img} alt={name} />

                    )}
                    <Stack spacing={0.3}>
                        <Typography variant='subtitle2' noWrap sx={{ maxWidth: '140px', overflow: 'hidden' }}>{name}</Typography>

                    </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <IconButton>
                        <Phone color='green' />
                    </IconButton>
                    <IconButton>
                        <VideoCamera color='green' />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export {
    CallLogElement,
    CallElement,
}