import { Box, Paper, styled } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import SectionHeading from './SectionHeading';
import { useAppContext } from '../../context/AppContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

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
  const { expenseStats, loading } = useAppContext();

  if (loading) {
    return <Box>Loading expense statistics...</Box>;
  }

  const data = {
    labels: expenseStats.map(stat => stat.category),
    datasets: [
      {
        data: expenseStats.map(stat => stat.percentage),
        backgroundColor: expenseStats.map(stat => stat.color),
        borderWidth: 0,
      },
    ],
  };

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