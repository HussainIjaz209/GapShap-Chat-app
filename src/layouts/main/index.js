import React from "react";
import { Container, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Logo from '../../assets/Images/logo.ico'

const isAuthenticated = true;


const MainLayout = () => {

  if (isAuthenticated) {
      return <Navigate to={'/app'} />
    }

  return (
    <>
      <Container sx={{ mt: 5, }} maxWidth='sm'>
        <Stack spacing={5}>
          <Stack sx={{ wideth: '100%' }} direction={'column'} alignItems={"center"}>
            <img src={Logo} style={{ height: 120, width: 120 }} alt="Logo" />
          </Stack>
        </Stack>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
