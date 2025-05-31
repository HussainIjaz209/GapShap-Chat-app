import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import { ChatList } from '../../data/index'
import Search from '../../components/search/Search'
import SearchIconWrapper from '../../components/search/SearchIconWrapper'
import StyledInputBase from '../../components/search/StyleBaseInput'
import ChatElement from '../../components/ChatElement'


export default function Chats() {
    const theme = useTheme();
    return (
        <>
            <Stack >
                <Box p={3} sx={{
                    position: "relative",
                    height: "100vh",
                    width: 320,
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Typography variant='h5'>
                            Chats
                        </Typography>
                        <IconButton>
                            <CircleDashed />
                        </IconButton>
                    </Stack>
                    <Stack sx={{ width: "100%" }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color='#709CE6' />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Stack>
                    <Stack spacing={1}>
                        <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
                            <ArchiveBox size={24} />
                            <Button>Achrive</Button>
                        </Stack>
                        <Divider />
                    </Stack>

                    <Stack sx={{ flexGrow: 1, overflow: "hidden", height: "calc(100vh - 150px)" }}>
                        <Stack
                            spacing={2}
                            direction="column"
                            sx={{
                                overflowY: "auto",
                                height: "100%",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                }
                            }}
                        >
                            
                            <Stack spacing={2.4}>
                                <Typography variant='subtitle2' sx={{ color: "#676767", paddingTop: "10px" }}>
                                    Pinned
                                </Typography>
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

                            </Stack>
                            <Stack spacing={2.4}>
                                <Typography variant='subtitle2' sx={{ color: "#676767" }}>
                                    All Chats
                                </Typography>
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
            </Stack>
        </>
    )
}
