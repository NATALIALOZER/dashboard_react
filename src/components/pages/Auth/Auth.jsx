import React from "react";
import "./Auth.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { login, registration } from "../../../actions/user";

const Auth = () => {
  const [isNewUser, setUserType] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="Auth">
      <div className="auth-block">
        <h2>Authentication</h2>
        <h5>
          Press your login and password to enter the App or create new account.
        </h5>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
          type="password"
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
        {isNewUser ? (
          <TextField
            margin="dense"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            label="Username"
            type="text"
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
        ) : (
          ""
        )}
        <Button
          sx={{ color: "aquamarine", marginTop: "3em" }}
          onClick={() => setUserType(!isNewUser)}
        >
          {isNewUser ? (
            <span>Move to Log In</span>
          ) : (
            <span>Create Account</span>
          )}
        </Button>
        {isNewUser ? (
          <Button
            sx={{ color: "aquamarine", marginTop: "3em" }}
            onClick={() => registration(email, password, username, isNewUser)}
          >
            Create
          </Button>
        ) : (
          <Button
            sx={{ color: "aquamarine", marginTop: "3em" }}
            onClick={() => login(email, password)}
          >
            Log In
          </Button>
        )}
      </div>
    </div>
  );
};

export default Auth;
