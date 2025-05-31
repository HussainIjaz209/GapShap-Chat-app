import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import StyledBadge from './StyleBadge'


const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
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
                            <Avatar src={img} />
                        </StyledBadge>
                    ) : (
                        <Avatar src={img} />
                    )}
                    <Stack spacing={0.3}>
                        <Typography variant='subtitle2'>{name}</Typography>
                        <Typography variant='caption'>{msg}</Typography>
                    </Stack>
                </Stack>

                <Stack alignItems={'center'} spacing={2}>
                    <Typography variant='caption' sx={{ fontWeight: "600" }}>{time}</Typography>
                    <Badge color='primary' badgeContent={unread} />
                </Stack>
            </Stack>
        </Box>
    )
}

export default ChatElement;