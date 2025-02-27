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
import { useAppContext } from '../../context/AppContext';

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
  padding: 32px;
  border-radius: 16px;
  @media (min-width: 1280px) {
    padding: 19px;
  }
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

const BalanceHistory = () => {
  const { balanceHistory, loading } = useAppContext();

  if (loading) {
    return <Box>Loading balance history...</Box>;
  }

  const data = {
    labels: balanceHistory.labels,
    datasets: [
      {
        fill: true,
        label: 'Balance',
        data: balanceHistory.values,
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.4,
      },
    ],
  };

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