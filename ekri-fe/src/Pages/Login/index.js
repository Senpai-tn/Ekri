import React from "react";
import "./style.css";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import TextForm from "../../components/TextForm";
function Login() {
  const { control, handleSubmit, watch, setError } = useForm();
  const submitLogin = () => {};
  return (
    <section>
      <div
        className="color"
        style={{
          background: "#ff359b",
        }}
      ></div>
      <div
        className="color"
        style={{
          height: 500,
          width: 500,
          background: "#fffd87",
          bottom: "-150px",
          left: 100,
        }}
      ></div>
      <div
        className="color"
        style={{
          height: 500,
          width: 500,
          background: "#00d2ff",
          bottom: 50,
          right: 300,
        }}
      ></div>

      <Box className="container">
        <Stack justifyContent={"center"} textAlign={"center"}>
          <Typography
            sx={{
              fontSize: 45,
              fontWeight: "900",
              fontFamily: "Kanit",
              color: "#115599ad",
            }}
          >
            Login
          </Typography>
          <Controller
            control={control}
            name=""
            render={() => {
              return <TextForm sx={{ my: "20px" }} label="Email" />;
            }}
          />
          <Controller
            control={control}
            name=""
            render={() => {
              return (
                <TextForm sx={{ my: "20px" }} label="Email" type={"password"} />
              );
            }}
          />
        </Stack>
      </Box>
    </section>
  );
}

export default Login;
