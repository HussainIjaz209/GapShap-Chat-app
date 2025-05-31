import React from 'react'
import { Stack } from '@mui/material'
import Header from './Header';
import Footer from './Footer';
import Messeges from './Messeges';


const Conversation = () => {

    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
            {/* header */}

            <Header />

            {/* messeges */}

            <Messeges menu={true} />

            {/* footer */}

            <Footer />
            
        </Stack>
    )
}

export default Conversation;
