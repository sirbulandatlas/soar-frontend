import { Grid, Box } from '@mui/material';
import MyCards from './MyCards';
import RecentTransactions from './RecentTransactions';
import WeeklyActivity from './WeeklyActivity';
import ExpenseStatistics from './ExpenseStatistics';
import QuickTransfer from './QuickTransfer';
import BalanceHistory from './BalanceHistory';

const Dashboard = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8} xl={7}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MyCards />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} xl={5}>
          <RecentTransactions />
        </Grid>
        <Grid item xs={12} lg={8} xl={7}>
          <WeeklyActivity />
        </Grid>
        <Grid item xs={12} lg={4} xl={5}>
          <ExpenseStatistics />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <QuickTransfer />
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <BalanceHistory />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
