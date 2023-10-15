import { TextField } from "@mui/material";
import React from "react";

function TextForm({ label, value, onChange, type, error }) {
  return (
    <TextField
      sx={{ my: "20px" }}
      inputProps={{ className: ["rounded"] }}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error && error.message}
    />
  );
}

export default TextForm;
