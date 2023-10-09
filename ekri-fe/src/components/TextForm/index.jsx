import { TextField } from "@mui/material";
import React from "react";

function TextForm({ label, value, onChange, type, error }) {
  return (
    <TextField
      sx={{ my: "20px" }}
      inputProps={{ className: ["rounded"] }}
      label={label}
      type={type}
    />
  );
}

export default TextForm;
