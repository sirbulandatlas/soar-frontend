import { Box, Paper, styled } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import SectionHeading from './SectionHeading';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
      labels: {
        usePointStyle: true,
      },
    },
  },
  // barThickness: 10,
  barPercentage: 0.4,
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
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Withdrawals',
      data: [1700, 1400, 1900, 1600, 2200, 1800, 2000],
      backgroundColor: '#232323',
      borderRadius: 8,
    },
    {
      label: 'Deposits',
      data: [2100, 1800, 2400, 1900, 2800, 2200, 2600],
      backgroundColor: '#396AFF',
      borderRadius: 8,
    },
  ],
};

const WeeklyActivity = () => {
  return (
    <>
      <SectionHeading>Weekly Activity</SectionHeading>
      <StyledPaper elevation={0}>
        <Box sx={{ height: 300, mt: 2 }}>
          <Bar options={options} data={data} />
        </Box>
      </StyledPaper>
    </>
  );
};

export default WeeklyActivity;
