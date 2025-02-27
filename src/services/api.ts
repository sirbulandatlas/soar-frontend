// Mock API service
import { UserProfile, Card, Transaction, ExpenseStat, Contact, BalanceData, WeeklyActivityData } from '../context/AppContext';


// Mock user profile data
export const fetchUserProfile = async (): Promise<UserProfile> => {
  
  return {
    id: '1',
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120',
    dateOfBirth: '25 January 1990',
    permanentAddress: 'San Jose, California, USA',
    presentAddress: 'San Jose, California, USA',
    postalCode: '45962',
    city: 'San Jose',
    country: 'USA'
  };
};

// Mock cards data
export const fetchCards = async (): Promise<Card[]> => {
  
  return [
    {
      id: 1,
      type: 'Visa',
      number: '**** **** **** 4242',
      holder: 'John Doe',
      balance: 24500.50,
      expiry: '12/25'
    },
    {
      id: 2,
      type: 'Mastercard',
      number: '**** **** **** 5555',
      holder: 'John Doe',
      balance: 15750.75,
      expiry: '09/24'
    }
  ];
};

// Mock transactions data
export const fetchTransactions = async (): Promise<Transaction[]> => {
  
  return [
    {
      id: 1,
      type: 'expense',
      description: 'Online Store',
      amount: -85.00,
      date: 'Today',
      icon: 'ShoppingBag',
      color: '#EF4444'
    },
    {
      id: 2,
      type: 'income',
      description: 'Salary Deposit',
      amount: 2850.00,
      date: 'Yesterday',
      icon: 'ArrowDownLeft',
      color: '#10B981'
    },
    {
      id: 3,
      type: 'expense',
      description: 'Coffee Shop',
      amount: -12.50,
      date: 'Yesterday',
      icon: 'Coffee',
      color: '#F59E0B'
    },
  ];
};

// Mock expense statistics data
export const fetchExpenseStats = async (): Promise<ExpenseStat[]> => {
  
  return [
    { category: 'Entertainment', percentage: 30, color: '#4F46E5' },
    { category: 'Bill Expenses', percentage: 25, color: '#10B981' },
    { category: 'Investment', percentage: 35, color: '#F59E0B' },
    { category: 'Others', percentage: 10, color: '#6B7280' }
  ];
};

// Mock balance history data
export const fetchBalanceHistory = async (): Promise<BalanceData> => {
  
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [30000, 35000, 32000, 37000, 35000, 40000]
  };
};

// Mock weekly activity data
export const fetchWeeklyActivity = async (): Promise<WeeklyActivityData> => {
  
  return {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    deposits: [2100, 1800, 2400, 1900, 2800, 2200, 2600],
    withdrawals: [1700, 1400, 1900, 1600, 2200, 1800, 2000]
  };
};

// Mock contacts data
export const fetchContacts = async (): Promise<Contact[]> => {
  
  return [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Developer',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=60'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Manager',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=60'
    },
  ];
};