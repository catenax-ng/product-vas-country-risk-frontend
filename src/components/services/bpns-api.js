/* eslint-disable no-console */
import axios from "axios";

// Actions
export function getBpns(token, customerUser) {
  console.log("getBpns");
  return axios
    .get(process.env.REACT_APP_GET_BPNS, {
      params: {
        name: customerUser.name,
        email: customerUser.email,
        companyName: customerUser.companyName,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
    .catch((err) => []);
}
