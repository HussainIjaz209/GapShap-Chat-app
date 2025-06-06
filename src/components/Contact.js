import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Slide, Stack, Typography } from '@mui/material'
import { Bell, CaretRight, PhoneCall, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { toggleSidebar, updateSidebarType } from '../redux/Slices/App';
import { faker } from '@faker-js/faker'
import AntSwitch from './AntSwitch'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
}); 


const BlockDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            slots={{
                transition: Transition,
            }}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Block this contact</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure yoy want to block this contact?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Yes</Button>
            </DialogActions>
        </Dialog>
    )
}


const DeleteDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            slots={{
                transition: Transition,
            }}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Delete this Chat</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure yoy want to Delete this Chat?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Yes</Button>
            </DialogActions>
        </Dialog>
    )
}


export default function Contact() {

    const theme = useTheme()
    const dispatch = useDispatch()

    const [openBlock, setOpenBlock] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)

    const handleCloseBlock = () => {
        setOpenBlock(false)
    }
    const handleCloseDelete = () => {
        setOpenDelete(false)
    }

    return (
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
                        justifyContent={'space-between'}
                        spacing={3}
                    >
                        <Typography variant='subtitle2'>
                            Contact Info
                        </Typography>
                        <IconButton onClick={() => {
                            dispatch(toggleSidebar())
                        }}>
                            <X />
                        </IconButton>
                    </Stack>
                </Box>
                {/* Body */}

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
                    <Stack
                        alignItems={'center'}
                        direction={'row'}
                        spacing={2}
                    >
                        <Avatar src='https://i.pravatar.cc/300' alt={faker.name.fullName()} sx={{ height: 64, width: 64 }} />
                        <Stack spacing={0.5}>
                            <Typography variant='artical' fontWeight={600}>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant='body2' fontWeight={500}>
                                {'+92 348 5209901'}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-evenly'}
                    >
                        <Stack
                            spacing={1}
                            alignItems={'center'}
                        >
                            <IconButton>
                                <VideoCamera />
                            </IconButton>
                            <Typography variant='overline'>
                                Video
                            </Typography>
                        </Stack>
                        <Stack
                            spacing={1}
                            alignItems={'center'}
                        >
                            <IconButton>
                                <PhoneCall />
                            </IconButton>
                            <Typography variant='overline'>
                                Audio
                            </Typography>
                        </Stack>
                    </Stack>


                    <Divider />

                    <Stack spacing={0.5}>
                        <Typography variant='artical' >
                            About
                        </Typography>
                        <Typography variant='body2' >
                            My About
                        </Typography>
                    </Stack>

                    <Divider />

                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant='subtitle2' >Media, Links & Docs</Typography>
                        <Button onClick={() => {
                            dispatch(updateSidebarType({ type: "SHARED" }))
                        }} endIcon={<CaretRight />}>
                            402
                        </Button>
                    </Stack>

                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        {[1, 2, 3].map((el) => {
                            return (
                                <Box key={el}>
                                    <img src='https://i.pravatar.cc/300?16' alt={faker.name.firstName()} />
                                </Box>
                            )
                        })}
                    </Stack>

                    <Divider />


                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} >

                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={2}
                        >
                            <Star size={21} />
                            <Typography variant='subtitle2'>
                                Starred Messages
                            </Typography>
                        </Stack>
                        <IconButton onClick={() => {
                            dispatch(updateSidebarType({ type: "STARRED" }))
                        }}>
                            <CaretRight />
                        </IconButton>
                    </Stack>

                    <Divider />

                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} >

                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={2}
                        >
                            <Bell size={21} />
                            <Typography variant='subtitle2'>
                                Mute Notification
                            </Typography>
                        </Stack>
                        <AntSwitch />
                    </Stack>

                    <Divider />

                    <Typography>
                        1 group in common
                    </Typography>

                    <Stack direction={'row'} alignItems={'center'} spacing={2} >
                        <Avatar src='https://i.pravatar.cc/300?17' alt={faker.name.fullName()} />
                        <Stack spacing={0.5}>
                            <Typography variant='subtitle2'>
                                Coading Monk
                            </Typography>
                            <Typography variant='caption'>
                                you, Owl, parrot, rabbit
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack direction={'row'} alignItems={'center'} spacing={2} >
                        <Button onClick={(() => {
                            setOpenBlock(true)
                        })} startIcon={<Prohibit />} fullWidth variant='outlined'>
                            Block
                        </Button>
                        <Button onClick={(() => {
                            setOpenDelete(true)
                        })} startIcon={<Trash />} fullWidth variant='outlined'>
                            Delete
                        </Button>
                    </Stack>

                </Stack>


            </Stack>
            {
                openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
            }
            {
                openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />
            }
        </Box>
    )
}
