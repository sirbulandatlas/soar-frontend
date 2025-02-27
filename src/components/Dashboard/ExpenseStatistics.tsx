import { Box, Paper, styled } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import SectionHeading from './SectionHeading';

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));
const data = {
  labels: ['Entertainment', 'Bill Expenses', 'Investment', 'Others'],
  datasets: [
    {
      data: [30, 25, 35, 10],
      backgroundColor: ['#4F46E5', '#10B981', '#F59E0B', '#6B7280'],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        padding: 20,
        usePointStyle: true,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const ExpenseStatistics = () => {
  return (
    <>
      <SectionHeading>Expense Statistics</SectionHeading>
      <StyledPaper elevation={0}>
        <Box
          sx={{
            height: 320,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Pie data={data} options={options} />
        </Box>
      </StyledPaper>
    </>
  );
};

export default ExpenseStatistics;
