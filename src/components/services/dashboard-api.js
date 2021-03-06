/* eslint-disable no-console */
import axios from "axios";

// Actions
export function getAll(ratingsArray, years) {
  const ratings = new Map();

  if (ratingsArray) {
    ratings.set("ratings", JSON.stringify(ratingsArray));
  }

  return axios
    .get(process.env.REACT_APP_DASHBOARD_URL, {
      params: {
        ratings: ratings.get("ratings"),
        year: years,
        name: "fabio",
        company: "test",
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export function getWorldMapInfo(ratingsArray, years) {
  const ratings = new Map();

  if (ratingsArray) {
    ratings.set("ratings", JSON.stringify(ratingsArray));
  }

  return axios
    .get(process.env.REACT_APP_DASHBOARD_WOLRD_MAP_URL, {
      params: {
        ratings: ratings.get("ratings"),
        year: years,
        name: "fabio",
        company: "test",
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}
