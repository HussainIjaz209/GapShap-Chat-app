import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";
import { Nav_Buttons, Profile_Menu } from "../../data/index"
import Logo from "../../assets/Images/logo.ico"
import { Gear } from "phosphor-react";
import useSettings from '../../hooks/useSettings'
import AntSwitch from "../../components/AntSwitch";
import { useNavigate } from "react-router-dom";


const getPath = (index) => {
  switch (index) {
    case 0:
      return '/app'
    case 1:
      return '/group'
    case 2:
      return '/call'

    case 3:
      return '/settings'

    default:
      break;
  }
}

const getMenuPath = (index) => {
  switch (index) {
    case 0:
      return '/profile'
    case 1:
      return '/setting'
    case 2:
      return 'auth/login'
    default:
      // to update token and set us Auth = false 
      break;
  }
}



export default function SideBar() {


  const theme = useTheme();
  const navigate = useNavigate()

  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();


  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Box padding={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: "100px" }}>
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
          spacing={3}
        >

          <Stack alignItems={"center"} spacing={4}>

            <Box sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 12,
            }}>
              <img src={Logo} alt="Chat Logo" />
            </Box>

            <Stack spacing={3} sx={{ width: "max-content" }} direction={"column"} alignItems={"center"} >
              {Nav_Buttons.map((element) => (
                element.index === selected ?
                  <Box
                    key={element.index}
                    p={1}
                    sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}
                  >
                    <IconButton sx={{ color: "#fff" }}>
                      {element.icon}
                    </IconButton>
                  </Box>
                  : <IconButton
                    onClick={() => {
                      setSelected(element.index)
                      navigate(getPath(element.index))
                    }}
                    sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
                    key={element.index}
                  >
                    {element.icon}
                  </IconButton>

              ))}
              <Divider sx={{ width: "48px", backgroundcolor: "black" }} />
              {selected === 3 ?
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box> :
                <IconButton
                  onClick={() => {
                    navigate(getPath(3))
                    setSelected(3)
                  }}
                  sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
                >
                  <Gear />
                </IconButton>
              }

            </Stack>
          </Stack>

          <Stack spacing={4}>
            <AntSwitch onChange={() => {
              onToggleMode();
            }} defaultChecked={false} />
            <Avatar
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              src="https://i.pravatar.cc/300"
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
            >
              <Stack spacing={1} px={1}>
                {Profile_Menu.map((el, idx) => (
                  <MenuItem key={el.title} onClick={() => {
                    handleClick();
                  }} >
                    <Stack onClick={(() => {
                      navigate(getMenuPath(idx));
                    })} sx={{ width: 100 }} direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
                      <span>{el.title}</span>
                      {el.icon}
                    </Stack>
                  </MenuItem>
                ))}
              </Stack>
            </Menu>
          </Stack>

        </Stack>
      </Box>
    </div>
  )
}
