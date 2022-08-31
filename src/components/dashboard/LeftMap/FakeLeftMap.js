/* eslint-disable no-console */
import React, { useState } from "react";
import { Dialog, IconButton, Button } from "cx-portal-shared-components";
import "./styles.scss";
import CustomWorldMap from "../CustomWorld/CustomWorldMap";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import { Box } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { toPng } from "html-to-image";
import ProgressBar from "../ProgressBar/ProgressBar";
import CloseIcon from "@mui/icons-material/Close";

const FakeLeftMap = (ratings) => {
  const [expandMap, setExpandMap] = useState(false);

  const openDialog = () => {
    setExpandMap(!expandMap);
  };

  const printMap = () => {
    const link = document.getElementById("idCustomWorldMap");
    toPng(link)
      .then((res) => {
        const img = new Image();
        img.src = res;
        var link = document.createElement("a");
        link.download = "worldMap.png";
        link.href = res;
        link.click();
      })
      .catch((error) => error);
  };

  return (
    <div className="left-map">
      <Dialog open={expandMap} onClose={openDialog}>
        <Box id="idCustomWorldMap">
          <div className="buttons">
            <h2>World Map</h2>
            <Button size="small" onClick={printMap}>
              Export Image
            </Button>

            <IconButton
              className="close-button"
              color="primary"
              onClick={openDialog}
              size="medium"
              variant="outlined"
            >
              <CloseIcon></CloseIcon>
            </IconButton>
          </div>
          <CustomWorldMap
            minMapWidth={500}
            maxMapWidth={1100}
            minMapHeight={500}
            maxMapHeight={1000}
          ></CustomWorldMap>
          <div style={{ width: "250px" }}>
            <ProgressBar className="bar" valuePercentage={100} />
          </div>
        </Box>

        <></>
      </Dialog>
      <IconButton
        className="expand-button"
        color="primary"
        onClick={openDialog}
        size="medium"
        variant="outlined"
      >
        <OpenWithIcon></OpenWithIcon>
      </IconButton>

      <CustomWorldMap
        minMapWidth={0}
        maxMapWidth={800}
        minMapHeight={0}
        maxMapHeight={600}
      ></CustomWorldMap>
    </div>
  );
};

export default FakeLeftMap;
