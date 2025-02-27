import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  styled,
} from '@mui/material';
import {
  ShoppingBag,
  ArrowDownLeft,
  Coffee,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const StyledPaper = styled(Paper)`
  border-radius: 16px;
`

const StyledAvatar = styled(Avatar)<{avatarColor?: string}>`
  margin-right: 8px;
`

const StyledListItemText = styled(ListItemText)`
  span {
    font-weight: 500;
  }
  p {
    color: #718EBF;
  }
`

const RecentTransactionsList = styled(List)`
  padding-bottom: 4px;
  padding-top: 4px;
`

const transactions = [
  {
    id: 1,
    type: 'expense',
    description: 'Online Store',
    amount: -85.0,
    date: '25 January 2025',
    icon: ShoppingBag,
    color: '#EF4444',
  },
  {
    id: 2,
    type: 'income',
    description: 'Salary Deposit',
    amount: 2850.0,
    date: '23 January 2024',
    icon: ArrowDownLeft,
    color: '#10B981',
  },
  {
    id: 3,
    type: 'expense',
    description: 'Coffee Shop',
    amount: -12.5,
    date: '23 January 2024',
    icon: Coffee,
    color: '#F59E0B',
  },
];

const RecentTransactions = () => {
  return (
    <>
      <SectionHeading>Recent Transactions</SectionHeading>

      <StyledPaper elevation={0}>
        <RecentTransactionsList>
          {transactions.map((transaction) => {
            const Icon = transaction.icon;
            return (
              <ListItem key={transaction.id}>
                <ListItemIcon>
                  <StyledAvatar
                    sx={{
                      bgcolor: `${transaction.color}15`,
                      color: transaction.color,
                    }}
                  >
                    <Icon size={20} />
                  </StyledAvatar>
                </ListItemIcon>
                <StyledListItemText
                  primary={transaction.description}
                  secondary={transaction.date}
                />
                <ListItemSecondaryAction>
                  <Typography
                    color={transaction.amount > 0 ? 'success.light' : 'error.light'}
                    variant='body2'
                    fontWeight='medium'
                  >
                    {transaction.amount > 0 ? '+' : ''}
                    {transaction.amount.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </RecentTransactionsList>
      </StyledPaper>
    </>
  );
};

export default RecentTransactions;
