import RenderCampsite from "../features/campsites/RenderCampsite";

import React from "react";

const CampsiteInfoScreen = (props) => {
  return <RenderCampsite campsite={props.campsite} />;
};

export default CampsiteInfoScreen;
