// import React from 'react';
// import styled from 'styled-components';
// import { Box, Paper, Typography, Grid } from '@mui/material';
// import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
// import BalanceHistory from './Dashboard/BalanceHistory';
// import ExpenseStatistics from './Dashboard/ExpenseStatistics';

// const StyledPaper = styled(Paper)`
//   padding: 20px;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   transition: transform 0.2s;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const IconWrapper = styled.div`
//   background-color: ${props => props.color};
//   padding: 10px;
//   border-radius: 8px;
//   margin-bottom: 15px;
// `;

// const StatValue = styled(Typography)`
//   font-size: 24px !important;
//   font-weight: bold !important;
//   margin: 10px 0 !important;
// `;

// const Dashboard = () => {
//   const stats = [
//     { icon: TrendingUp, title: 'Sales', value: '$24,500', color: '#e3f2fd' },
//     { icon: Users, title: 'New Users', value: '2,356', color: '#f3e5f5' },
//     { icon: DollarSign, title: 'Revenue', value: '$18,230', color: '#e8f5e9' },
//     { icon: Activity, title: 'Growth', value: '+15.3%', color: '#fff3e0' },
//   ];

//   return (
//     <Box sx={{ flexGrow: 1, p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Dashboard Overview
//       </Typography>
      
//       <Grid container spacing={3}>
//         {stats.map((stat, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <StyledPaper elevation={2}>
//               <IconWrapper color={stat.color}>
//                 <stat.icon size={24} />
//               </IconWrapper>
//               <Typography variant="subtitle2" color="textSecondary">
//                 {stat.title}
//               </Typography>
//               <StatValue>{stat.value}</StatValue>
//             </StyledPaper>
//           </Grid>
//         ))}
//       </Grid>
//       <BalanceHistory></BalanceHistory>
//       <ExpenseStatistics></ExpenseStatistics>

//     </Box>
//   );
// };

// export default Dashboard;