import React, { useContext, Component } from "react";
import "./styles.scss";
import Dialog from "@mui/material/Dialog";
import RatingTable from "./RatingTable";
import { RatesContext } from "../../contexts/rates";

const Rating = ({ passValuesFromComponent, years }) => {
  //Upload Button Handlers
  const [open, setOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(!open);
  };

  return (
    <div>
      <RatingTable
        passValuesFromComponent={passValuesFromComponent}
        years={years}
        openDialog={openDialog}
        expandLabel={open ? "Close" : "Expand Table"}
      ></RatingTable>
      <Dialog aria-labelledby="customized-dialog-title" open={open}>
        <RatingTable
          passValuesFromComponent={passValuesFromComponent}
          years={years}
          openDialog={openDialog}
          expandLabel={open ? "Close" : "Expand Table"}
        ></RatingTable>
      </Dialog>
    </div>
  );
};

export default Rating;
