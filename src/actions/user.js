import axios from "axios";

export const registration = async (email, password, username, firstEnter) => {
  await axios
    .post("http://localhost:5000/api/auth", {
      email,
      password,
      username,
      firstEnter,
    })
    .then((response) => alert(response.data.message))
    .catch((err) => alert(err));
};

export const login = async (email, password) => {
  await axios
    .post("http://localhost:5000/api/auth", {
      email,
      password,
    })
    .then((response) => alert(response.data.message))
    .catch((err) => alert(err));
};
