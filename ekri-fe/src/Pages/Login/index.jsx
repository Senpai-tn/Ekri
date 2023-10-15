import React from "react";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import TextForm from "../../components/TextForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import userActions from "../../redux/actions/userActions";
function Login() {
  const dispatch = useDispatch();
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const submitLogin = (data) => {
    const { email, password } = data;
    console.log(data);
    axios
      .post("http://127.0.0.1:2500/api/user/login", { email, password })
      .then((response) => {
        dispatch({
          type: userActions.auth,
          user: response.data.user,
          token: response.data.token,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
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

      <form onSubmit={handleSubmit(submitLogin)}>
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
              name="email"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <TextForm
                    sx={{ my: "20px" }}
                    label="Email"
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
            <Controller
              control={control}
              name="password"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <TextForm
                    sx={{ my: "20px" }}
                    label="Email"
                    type={"password"}
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
            <Button type="submit">Sign In</Button>
          </Stack>
        </Box>
      </form>
      <Link sx={{ zIndex: 1 }} href="/register">
        Register
      </Link>
    </section>
  );
}

export default Login;
