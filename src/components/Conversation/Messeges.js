import React from 'react'
import { Box, Stack } from '@mui/material'
import { Chat_History } from '../../data'
import { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg } from './MessegeType'

export default function Messeges({menu}) {
    return (
        <>
            <Box width={"100%"} sx={{ flexGrow: "1", overflowY: 'scroll' }}>
                <Box p={3}>
                    <Stack spacing={3}>
                        {
                            Chat_History.map((el, index) => {
                                const key = el.id || index; // Prefer a unique id, fallback to index if unavailable

                                switch (el.type) {
                                    case "divider":
                                        return <Timeline key={key} el={el} />;

                                    case "msg":
                                        switch (el.subtype) {
                                            case "img":
                                                return <MediaMsg menu={menu} key={key} el={el} />;
                                            case "doc":
                                                return <DocMsg menu={menu} key={key} el={el} />;
                                            case "link":
                                                return <LinkMsg menu={menu} key={key} el={el} />;
                                            case "reply":
                                                return <ReplyMsg menu={menu} key={key} el={el} />;
                                            default:
                                                return <TextMsg menu={menu} key={key} el={el} />;
                                        }

                                    default:
                                        return <React.Fragment key={key} />;
                                }
                            })
                        }

                    </Stack>
                </Box>
            </Box>
        </>
    )
}
