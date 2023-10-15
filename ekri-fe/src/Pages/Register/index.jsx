import React from "react";
import { Controller, Form, useForm } from "react-hook-form";
import TextForm from "../../components/TextForm";
import { Box, Button, Link } from "@mui/material";

const Register = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <Box>
      <Form
        control={control}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Controller
          control={control}
          name="firstName"
          rules={{ required: { value: true, message: "Required field" } }}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            return (
              <TextForm
                value={value}
                onChange={onChange}
                error={error}
                label={"First Name"}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="lastName"
          rules={{ required: { value: true, message: "Required field" } }}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            return (
              <TextForm
                value={value}
                onChange={onChange}
                error={error}
                label={"Last Name"}
              />
            );
          }}
        />
        <Button type="submit    ">Register</Button>
      </Form>
      <Link sx={{ zIndex: 1 }} href="/">
        Login
      </Link>
    </Box>
  );
};

export default Register;
