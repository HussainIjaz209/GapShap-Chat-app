import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useState } from 'react'
import Search from '../../components/search/Search'
import SearchIconWrapper from '../../components/search/SearchIconWrapper'
import StyledInputBase from '../../components/search/StyleBaseInput'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import { ChatList } from '../../data'
import ChatElement from '../../components/ChatElement'
import CreateGroup from '../../sections/main/CreateGroup'


export default function Group() {

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
                        <Stack sx={{}}>
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
                            <Typography variant='subtitle2' component={Link} underline='none' sx={{ cursor: 'pointer' }} >Create New Group</Typography>
                            <IconButton onClick={() => {
                                setOpenDialog(true)
                            }}>
                                <Plus style={{ color: theme.palette.primary.main }} />
                            </IconButton>
                        </Stack>
                        <Divider />

                        <Stack sx={{ flexGrow: 1, overflowY: 'scroll', height: '100%', }}>

                            <Stack spacing={2.5}>
                                <Typography variant='subtitle2' sx={{ color: '#676667' }}>Pinned</Typography>
                                {/* Pinned Groups  */}
                                {ChatList.filter((el) => el.pinned).map((el) => (
                                    <ChatElement
                                        key={el.id}
                                        id={el.id}
                                        name={el.name}
                                        img={el.img}
                                        msg={el.msg}
                                        time={el.time}
                                        unread={el.unread}
                                        online={el.online}
                                    />
                                ))}

                                <Typography variant='subtitle2' sx={{ color: '#676667' }}>All Groups</Typography>
                                {/* Groups other then Pinned  */}
                                {ChatList.filter((el) => !el.pinned).map((el) => (
                                    <ChatElement
                                        key={el.id}
                                        id={el.id}
                                        name={el.name}
                                        img={el.img}
                                        msg={el.msg}
                                        time={el.time}
                                        unread={el.unread}
                                        online={el.online}
                                    />
                                ))}
                            </Stack>

                        </Stack>
                    </Stack>
                </Box>

                {/* right  */}
                {/* in right we will create the conversation tab */}
                {/* or reuse it */}
                {/* import Conversation from "../../components/Conversation"; */}
                {/* <Conversation /> */}

            </Stack>

            {
                openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
            }

        </div>
    )
}
