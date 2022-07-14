import clsx from "clsx";

export const columns = [
  {
    description: "Business Partner Number",
    field: "bpn",
    flex: 1,
    minWidth: 100,
    headerName: "Business Partner Number",
  },
  {
    description: "Legal Name",
    field: "legalName",
    flex: 1,
    minWidth: 100,
    headerName: "Legal Name",
  },
  {
    description: "Address",
    field: "address",
    flex: 1,
    minWidth: 100,
    headerName: "Address",
  },
  {
    description: "City",
    field: "city",
    flex: 1,
    minWidth: 100,
    headerName: "City",
  },
  {
    description: "Country",
    field: "country",
    flex: 1,
    minWidth: 100,
    headerName: "Country",
  },
  {
    description: "Score",
    field: "score",
    headerName: "Score",
    type: "number",

    cellClassName: (params) =>
      clsx("super-app", {
        minColor: params.value > 30,
        between: params.value < 20,
        maxColor: params.value > 10,
      }),
  },
  {
    description: "Rating",
    field: "rating",
    flex: 1,
    minWidth: 100,
    headerName: "Rating",
  },
];
