import React from "react";
import "./Auth.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="auth-block">
        <h2>Auth</h2>
        <h5>Press your login and password to enter the App</h5>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          sx={{
            width: "100%",
            height: "40px",
            "& .MuiFormLabel-root": { color: "aquamarine" },
            "& .MuiInputBase-root": { color: "white" },
            "& .MuiInput-root:after": { borderBottom: "none" },
          }}
        ></TextField>
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          sx={{
            width: "100%",
            height: "40px",
            marginBottom: "3em",
            "& .MuiFormLabel-root": { color: "aquamarine" },
            "& .MuiInputBase-root": { color: "white" },
            "& .MuiInput-root:after": { borderBottom: "none" },
          }}
        ></TextField>
        <Button sx={{ color: "aquamarine" }}>Log In</Button>
      </div>
    </div>
  );
};

export default Auth;
