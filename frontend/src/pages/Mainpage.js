import { useState } from "react";
import { GridItem } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import SensorData from "../components/SensorData";
import BackGround from "../components/base.svg";

function Mainpage() {
  var [refresh, setRefresh] = useState(false);
  //refresh is used when someone wants to update their data
  return (
    <div style={{
      backgroundImage: `url(${BackGround})`,
      backgroundSize: '1920px 1080px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}> 
      <SensorData type={"Water Content"} color={'green.400'} value={40} />
      <SensorData type={"Sunlight"} color={'orange.400'} value={60} />

    </div>
  );
}

export default Mainpage;
