import { useTheme } from '@mui/material/styles'
import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react'
import { faker } from '@faker-js/faker'
import Shortcuts from '../../sections/settings/Shortcuts'

export default function Settings() {

    const theme = useTheme()

    const [openShoetcuts, setOpenShortcuts] = useState(false);

    const handleOpenShortcuts = () => setOpenShortcuts(true);
    const handleCloseShortcuts = () => setOpenShortcuts(false);

    const list = [
        {
            key: 0,
            icon: <Bell size={20} />,
            title: "Notifications",
            onclick: () => { },
        },
        {
            key: 1,
            icon: <Lock size={20} />,
            title: "Privacy",
            onclick: () => { },
        },
        {
            key: 2,
            icon: <Key size={20} />,
            title: "Security",
            onclick: () => { },
        },
        {
            key: 3,
            icon: <PencilCircle size={20} />,
            title: "Theme",
            // onclick: handkeOpenTheme,
            onclick: () => { },
        },
        {
            key: 4,
            icon: <Image size={20} />,
            title: "Theme",
            onclick: () => { },
        },
        {
            key: 5,
            icon: <Note size={20} />,
            title: "Theme",
            onclick: () => { },
        },
        {
            key: 6,
            icon: <Keyboard size={20} />,
            title: "Keyboard Shortcuts",
            onclick: handleOpenShortcuts,
        },
        {
            key: 7,
            icon: <Info size={20} />,
            title: "Help",
            onclick: () => { },
        },
    ]

    return (
        <>
            <div>
                <Stack direction={'row'} sx={{ width: "100%" }} >
                    {/* leftPanel */}
                    <Box sx={{
                        overflowY: 'auto',
                        height: '100vh', width: 320,
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        backgroundColor: theme.palette.mode === 'light' ? "#F8FAFA" : theme.palette.background
                    }}>
                        <Stack p={4} spacing={5}>
                            {/* Header */}
                            <Stack direction={'row'} alignItems={'center'} spacing={3}>
                                <IconButton>
                                    <CaretLeft size={24} color='#4B4B4B' />
                                </IconButton>
                                <Typography variant='h6'>Settings</Typography>
                            </Stack>
                            {/* Profile */}
                            <Stack direction={'row'} spacing={3}>
                                <Avatar sx={{ width: 56, height: 56, }} src='https://i.pravatar.cc/300' alt={faker.name.fullName()} />
                                <Stack spacing={0.5}>
                                    <Typography variant='article'>{faker.name.fullName()}</Typography>
                                    <Typography variant='body2'>{faker.random.words()}</Typography>
                                </Stack>
                            </Stack>
                            {/* List  */}
                            <Stack spacing={4}>
                                {list.map(({ key, icon, title, onclick }) =>
                                    <React.Fragment key={key}>
                                        <Stack key={key} spacing={2} sx={{ cursor: 'pointer', }} onClick={onclick}>
                                            <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                                {icon}
                                                <Typography variant='body2'>{title}</Typography>
                                            </Stack>
                                            {key !== 7 && <Divider />}
                                        </Stack>
                                    </React.Fragment>
                                )}
                            </Stack>
                        </Stack>
                    </Box>
                    {/* RightPanel */}
                </Stack>
                {openShoetcuts && <Shortcuts open={openShoetcuts} handleClose={handleCloseShortcuts} />}
            </div>
        </>
    )
}
