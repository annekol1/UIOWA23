import { CircularProgress, Heading, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

//create a badge that displays sensor data as a percent and color
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const fakeData = [1, 2, 3, 4, 5, 6, 7];
export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: fakeData,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    }
  ],
};

function SensorData({ type, color, value }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  return (
    <Box>
      <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <Heading fontSize='20px'>{type}</Heading>
        <CircularProgress
          value={value}
          color={color}
          size="100px" 
          style={{marginBottom: '20px'}}/>
        <div style={{ display: 'flex' }}>
          <Line options={options} data={data} />
        </div>
      </div>
    </Box>
  );
}

export default SensorData;
