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
  Music,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useAppContext } from '../../context/AppContext';

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

// Map icon strings to actual components
const iconMap = {
  ShoppingBag,
  ArrowDownLeft,
  Coffee,
  Music
};

const RecentTransactions = () => {
  const { transactions, loading } = useAppContext();

  if (loading) {
    return <Box>Loading transactions...</Box>;
  }

  return (
    <>
      <SectionHeading>Recent Transactions</SectionHeading>

      <StyledPaper elevation={0}>
        <RecentTransactionsList>
          {transactions.map((transaction) => {
            // Get the icon component based on the icon string
            const IconComponent = iconMap[transaction.icon as keyof typeof iconMap] || ShoppingBag;
            
            return (
              <ListItem key={transaction.id}>
                <ListItemIcon>
                  <StyledAvatar
                    sx={{
                      bgcolor: `${transaction.color}15`,
                      color: transaction.color,
                    }}
                  >
                    <IconComponent size={20} />
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