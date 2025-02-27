import { Box, Paper, styled } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useAppContext } from '../../context/AppContext';
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

const WeeklyActivity = () => {
  const { weeklyActivity, loading } = useAppContext();

  if (loading) {
    return <Box>Loading weekly activity...</Box>;
  }

  const data = {
    labels: weeklyActivity.labels,
    datasets: [
      {
        label: 'Deposits',
        data: weeklyActivity.deposits,
        backgroundColor: '#4F46E5',
        borderRadius: 8,
      },
      {
        label: 'Withdrawals',
        data: weeklyActivity.withdrawals,
        backgroundColor: '#E5E7EB',
        borderRadius: 8,
      },
    ],
  };

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