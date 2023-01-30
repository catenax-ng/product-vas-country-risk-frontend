/* eslint-disable no-console */
import axios from "axios";

// Actions
export function getRatingsByYear(Year, token, customerUser) {
  var yearAPI;

  if (Year === "") {
    yearAPI = new Date().getFullYear();
  } else {
    yearAPI = Year;
  }

  return axios
    .get(process.env.REACT_APP_DASHBOARD_URL_RATINGSTABLE, {
      params: {
        year: yearAPI,
        name: customerUser.name,
        email: customerUser.email,
        companyName: customerUser.companyName,
      },
      data: customerUser,
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export function deleteRating(token, customerUser, ratingId) {
  return axios({
    method: "delete",
    url: process.env.REACT_APP_DELETE_RATINGS + `/${ratingId}`,
    params: {
      name: customerUser.name,
      email: customerUser.email,
      companyName: customerUser.companyName,
    },

    headers: { Authorization: `Bearer ${token}` },
  });
}
