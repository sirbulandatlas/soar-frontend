import { Box, Paper } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import SectionHeading from './SectionHeading';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const StyledPaper = styled(Paper)`
  padding: 19px;
  border-radius: 16px;
`
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: '#f0f0f0',
      },
    },
  },
  maintainAspectRatio: false,
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      fill: true,
      label: 'Balance',
      data: [30000, 35000, 32000, 37000, 35000, 40000],
      borderColor: '#4F46E5',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      tension: 0.4,
    },
  ],
};

const BalanceHistory = () => {
  return (
    <>
      <SectionHeading>Balance History</SectionHeading>
      <StyledPaper elevation={0}>
        <Box sx={{ height: 200 }}>
          <Line options={options} data={data} />
        </Box>
      </StyledPaper>
    </>
  );
};

export default BalanceHistory;
