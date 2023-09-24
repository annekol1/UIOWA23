import { useState } from "react";
import { GridItem } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import SensorData from "../components/SensorData";

function Mainpage() {
  var [refresh, setRefresh] = useState(false);
  //refresh is used when someone wants to update their data
  return (
    <div>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
      <SensorData type={"Water Content"} color={'green.400'} value={40} />
      <SensorData type={"Sunlight"} color={'orange.400'} value={60} />
    </div>
  );
}

export default Mainpage;
